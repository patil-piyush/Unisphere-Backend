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
    location_coordinates: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    check_in_time: {
        type: Date,
        required: true
    },
    check_out_time: {
        type: Date,
    }
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;