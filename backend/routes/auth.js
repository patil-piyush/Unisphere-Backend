const express = require('express');
const {handleUserSignin, handleUserSignup, handleUserLogout} = require('../controllers/auth')

const router = express.Router();


router.get('/signin',(req,res) => {res.send("signin page")});
router.post('/signin', handleUserSignin);




router.get('/signup',(req,res) => {res.send("signup page")});
router.post('/signup', handleUserSignup);



router.get('/logout', handleUserLogout);


module.exports = router