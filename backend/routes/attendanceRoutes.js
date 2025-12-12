const express = require("express");
const router = express.Router();

const clubAuth = require("../middlewares/clubAuthMiddleware");
const {userAuthMiddleware} = require("../middlewares/userAuthMiddleware");

const {
  startAttendanceSession,
  getNextToken
} = require("../controllers/attendanceTokenController");

const {
  scanAttendance,
  getLiveAttendance
} = require("../controllers/attendanceController");

// Club → start QR session
router.post("/events/:eventId/attendance/start", clubAuth, startAttendanceSession);

// Club → get next auto-refresh token
router.get("/events/:eventId/attendance/next-token", clubAuth, getNextToken);

// User → scan QR and mark attendance
router.post("/events/attendance/scan", userAuthMiddleware, scanAttendance);

// Club → live attendance feed
router.get("/events/:eventId/attendance/live", clubAuth, getLiveAttendance);

module.exports = router;
