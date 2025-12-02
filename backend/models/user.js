const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamp: true });



userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const User = mongoose.model('user', userSchema);


module.exports = User;