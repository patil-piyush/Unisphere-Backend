const Attendance = require("../models/attendance");
const AttendanceToken = require("../models/attendanceToken");
const EventRegistration = require("../models/eventRegistration");
const User = require("../models/user");

const scanAttendance = async (req, res) => {
  try {
    const userId = req.userId;
    const { token } = req.body;

    const tokenDoc = await AttendanceToken.findOne({ token });
    if (!tokenDoc)
      return res.status(400).json({ message: "Invalid QR code" });

    if (tokenDoc.expiration < new Date())
      return res.status(400).json({ message: "QR expired" });

    const eventId = tokenDoc.event_id;

    const registration = await EventRegistration.findOne({
      event_id: eventId,
      user_id: userId
    });

    if (!registration)
      return res.status(403).json({ message: "Not registered for this event" });

    const existing = await Attendance.findOne({ event_id: eventId, user_id: userId });
    if (existing)
      return res.status(409).json({ message: "Attendance already marked" });

    await Attendance.create({
      event_id: eventId,
      user_id: userId,
      check_in_time: new Date()
    });

    res.status(200).json({ message: "Attendance marked successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLiveAttendance = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const attendees = await Attendance.find({ event_id: eventId })
      .populate("user_id", "name email")
      .sort({ check_in_time: -1 });

    res.status(200).json(attendees);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { scanAttendance, getLiveAttendance };
