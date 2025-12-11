const express = require("express");
const router = express.Router();
const { userAuthMiddleware } = require("../middlewares/userAuthMiddleware");
const {
  registerForEvent,
  cancelRegistration,
  getMyRegisteredEvents
} = require("../controllers/eventRegistrationController");

router.post("/", userAuthMiddleware, registerForEvent);
router.delete("/", userAuthMiddleware, cancelRegistration);
router.get("/my", userAuthMiddleware, getMyRegisteredEvents);

module.exports = router;
