const express = require("express");
const router = express.Router();
const { userAuth } = require("../middlewares/userAuthMiddleware");
const {
  registerForEvent,
  cancelRegistration,
  getMyRegisteredEvents
} = require("../controllers/eventRegistrationController");

router.post("/", userAuth, registerForEvent);
router.delete("/", userAuth, cancelRegistration);
router.get("/my", userAuth, getMyRegisteredEvents);

module.exports = router;
