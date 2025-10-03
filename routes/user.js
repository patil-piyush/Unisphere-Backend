const express = require('express')
const {verifyToken} = require('../middlewares/auth')
const {handleUserDashboard, handleUserProfile, handleUserProfileUpdate} = require('../controllers/user')


const router = express.Router();


router.get('/dashboard', verifyToken, handleUserDashboard);
router.get('/profile', verifyToken, handleUserProfile);
router.post('/updateProfile', verifyToken, handleUserProfileUpdate);


module.exports = router