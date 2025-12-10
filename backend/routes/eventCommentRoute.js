const express = require("express");
const router = express.Router();
const { userAuth } = require("../middlewares/userAuthMiddleware");
const {
  addComment,
  getEventComments,
  deleteComment,
  toggleLikeComment
} = require("../controllers/eventCommentsController");

// eventId in params for fetching
router.get("/:eventId", getEventComments);

// user actions
router.post("/", userAuth, addComment);
router.delete("/:commentId", userAuth, deleteComment);
router.post("/:commentId/like", userAuth, toggleLikeComment);

module.exports = router;
