const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    event_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    expiration: {
        type: Date,
        required: true
    },  
}, { timestamps: true });

module.exports = mongoose.model('AttendanceToken', attendanceSchema);