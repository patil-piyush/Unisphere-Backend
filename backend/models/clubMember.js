const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const clubMemberSchema = new mongoose.Schema({ 
    club_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true,
    },
    role: {
        type: String,
        enum: ['member', 'president'],
        default: 'member'
    },
}, { timestamps: true });

export default mongoose.model('ClubMember', clubMemberSchema);

// Hash password before saving
clubMemberSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});