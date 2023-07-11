const dotenv = require("dotenv")
const express = require("express");
const mongoose = require('mongoose');
const app = express()
const cors = require("cors");
dotenv.config({path: './.env'})

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
}));

  mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const UserModel = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.create({ name, email, password });
    res.json("Success");
  } catch (err) {
    res.json(err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json({ Status: "Success", role: user.role });
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  } catch (err) {
    res.json(err);
  }
});

const server = app.listen(3001, (err) => {
  if (err) {
    console.error("Server failed to start:", err);
  } else {
    console.log("Server is running on port 3001");
  }
});

