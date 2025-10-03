require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./config/connectDB')
const multer = require('multer');
const upload = multer();
const {verifyToken} = require('./middlewares/auth')

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase');

app.get('/', (req, res) => {res.send('Hello, World!');});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});
