const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

app.use("/check", (req, res) => {
  res.send("Welcome to the contact API");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});