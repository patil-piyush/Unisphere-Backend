require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connection = require("./config/db");

const clubRoutes = require("./routes/clubRoutes");
const clubMemberRoutes = require("./routes/clubMemberRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//   origin: "http://localhost:3000", // your frontend
//   credentials: true
// }));

// Routes
app.use("/api/clubs", clubRoutes);
app.use("/api/members", clubMemberRoutes);
app.use("/api/users", userRoutes);

// Connect DB and start server
connection().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});