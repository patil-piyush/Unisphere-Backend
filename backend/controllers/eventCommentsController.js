const Comment = require("../models/comments");
const EventRegistration = require("../models/eventRegistration");

// Only registered users can comment

// Add comment
exports.addComment = async (req, res) => {
  try {
    const user_id = req.userId;
    const { event_id, content, parent_comment_id } = req.body;

    const isRegistered = await EventRegistration.findOne({ event_id, user_id });
    if (!isRegistered) {
      return res.status(403).json({ message: "You must be registered for this event to comment" });
    }

    const comment = await Comment.create({
      event_id,
      user_id,
      content,
      parent_comment_id: parent_comment_id || null
    });

    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get comments for an event (public)
exports.getEventComments = async (req, res) => {
  try {
    const comments = await Comment.find({ event_id: req.params.eventId })
      .populate("user_id", "name profileIMG")
      .sort({ createdAt: 1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete comment (only owner for now)
exports.deleteComment = async (req, res) => {
  try {
    const user_id = req.userId;
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user_id.toString() !== user_id) {
      return res.status(403).json({ message: "You can delete only your comments" });
    }

    await Comment.deleteOne({ _id: comment._id });

    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Like / Unlike comment (toggle)
exports.toggleLikeComment = async (req, res) => {
  try {
    const user_id = req.userId;
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) return res.status(404).json({ message: "Comment not found" });

    const alreadyLiked = comment.likes.some(
      (id) => id.toString() === user_id.toString()
    );

    if (alreadyLiked) {
      comment.likes.pull(user_id);
      await comment.save();
      return res.status(200).json({ message: "Unliked" });
    } else {
      comment.likes.push(user_id);
      await comment.save();
      return res.status(200).json({ message: "Liked" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
