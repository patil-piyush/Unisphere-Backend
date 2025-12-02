require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./config/connectDB')
const multer = require('multer');
const upload = multer();
const {verifyToken} = require('./middlewares/auth')

const PORT = process.env.PORT || 3000;
const app = express();

// Connect to the database
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/Unisphere');


// Middlewares
app.use(upload.none()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));



// Routes
app.get('/', (req, res) => res.send("This is home page"));
app.use("/auth", require('./routes/auth'));
app.use("/user", verifyToken, require('./routes/user'));


app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
