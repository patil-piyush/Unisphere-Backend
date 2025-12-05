const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    club_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    bannerURL: {
        type: String,
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    max_capacity: {
        type: Number,
        required: true,
    },
    location_coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);