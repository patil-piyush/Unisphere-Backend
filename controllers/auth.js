const User = require('../models/user');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const { generateTokenForUser } = require('../services/authentication')

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' || true,
    sameSite: "strict",
    signed: true,
    maxAge: 24 * 60 * 60 * 1000
};



async function handleUserSignup(req, res) {
    const { name, username, email, password } = req.body;
    try {
        const emailExist = await User.findOne({ email: email });
        const usernameExist = await User.findOne({ username: username });
        if (emailExist || usernameExist) {
            return res.status(400).json({ error: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name: name,
            username: username,
            email: email,
            password: hashedPassword
        });

        // Send JSON response indicating success
        res.status(201).json({ success: true, message: "Signup successful" });

    } catch (error) {
        console.error("Signup error: ", error);
        res.status(500).json({ error: "Internal server error!" });
    }
}

async function handleUserSignin(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({
                success: false,
                error: "Incorrect Username or Password!!"
            });
        }

        const Token = generateTokenForUser(user);

        res.cookie("token", Token, cookieOptions);
        res.status(200).json({
            success: true,
            message: "Signin successful",
            user: {
                id: user._id,
                name: user.name,
                username: user.username
            }
        });

    } catch (error) {
        console.error("Signin error: ", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}



async function handleUserLogout(req, res) {
    try {
        res.clearCookie("token", cookieOptions);

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        console.error("Logging out error: ", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}


module.exports = {
    handleUserSignin,
    handleUserSignup,
    handleUserLogout,
}