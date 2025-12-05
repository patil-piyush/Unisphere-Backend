const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parent_comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);