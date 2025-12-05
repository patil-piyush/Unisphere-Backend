const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    college_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year_of_study: {
        type: Number,
        required: true  
    },
    interest: {
        type: [String],
    },
    profileIMG: {
        type: String,
    },
    bannerIMG: {
        type: String,
    },
    role: {
        type: String,
        enum: ['student', 'clubMember', 'Admin'],
        default: 'student'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);