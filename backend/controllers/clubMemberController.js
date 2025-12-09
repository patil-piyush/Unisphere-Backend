const ClubMember = require("../models/clubMember");
const Club = require("../models/club");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Club adds member
const addClubMember = async (req, res) => {
  try {
    const { email } = req.body;
    const club_id = req.clubId;

    const exists = await ClubMember.findOne({ email });
    if (exists) return res.status(400).json({ message: "Member already exists" });

    const member = await ClubMember.create({
      email,
      club_id,
      role: "member"
    });

    res.status(201).json({ message: "Member added successfully", member });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Member login (email + club password)
const loginClubMember = async (req, res) => {
  try {
    const { email, password } = req.body;

    const member = await ClubMember.findOne({ email });
    if (!member) return res.status(404).json({ message: "Member not found" });

    const club = await Club.findById(member.club_id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    const valid = await bcrypt.compare(password, club.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        memberId: member._id,
        clubId: member.club_id,
        role: member.role,
        type: "club-member"
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: "Member login successful" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all members of logged-in club
const getClubMembers = async (req, res) => {
  try {
    const members = await ClubMember.find({ club_id: req.clubId });
    res.status(200).json(members);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove member (club only)
const removeClubMember = async (req, res) => {
  try {
    const member = await ClubMember.findOneAndDelete({
      _id: req.params.id,
      club_id: req.clubId
    });

    if (!member) return res.status(404).json({ message: "Member not found" });

    res.status(200).json({ message: "Member removed successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Member logout
const logoutClubMember = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Member logged out successfully" });
};

module.exports = {
  addClubMember,
  loginClubMember,
  getClubMembers,
  removeClubMember,
  logoutClubMember
};
