const mongoose = require('mongoose');

const clubMemberSchema = new mongoose.Schema({
  club_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ["member", "president"],
    default: "member"
  }
}, { timestamps: true });

module.exports = mongoose.model("ClubMember", clubMemberSchema);
