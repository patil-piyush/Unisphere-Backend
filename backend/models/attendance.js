const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
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
    check_in_time: {
        type: Date,
        default: Date.now
    },
    check_out_time: {
        type: Date
    }
}, { timestamps: true });

attendanceSchema.index({ event_id: 1, user_id: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
