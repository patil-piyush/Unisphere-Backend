const express = require("express");
const router = express.Router();
const { userAuthMiddleware } = require("../middlewares/userAuthMiddleware");
const {
  registerForEvent,
  cancelRegistration,
  getMyRegisteredEvents
} = require("../controllers/eventRegistrationController");

router.post("/:eventId", userAuthMiddleware, registerForEvent);
router.delete("/:eventId", userAuthMiddleware, cancelRegistration);
router.get("/my", userAuthMiddleware, getMyRegisteredEvents);

module.exports = router;
