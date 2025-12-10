const express = require("express");
const router = express.Router();
const clubAuth = require("../middlewares/clubAuthMiddleware");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  closeRegistration,
  openRegistration,
  getAllEvents,
  getEventById,
  getClubEvents,
  getEventRegistrations
} = require("../controllers/eventsController");

// Public
router.get("/", getAllEvents);
router.get("/:id", getEventById);

// Club specific (place before /:id if needed)
router.get("/club/my/events", clubAuth, getClubEvents);
router.get("/:id/registrations", clubAuth, getEventRegistrations);

// Modify/create after
router.post("/", clubAuth, createEvent);
router.put("/:id", clubAuth, updateEvent);
router.delete("/:id", clubAuth, deleteEvent);
router.put("/:id/close", clubAuth, closeRegistration);
router.put("/:id/open", clubAuth, openRegistration);

module.exports = router;

