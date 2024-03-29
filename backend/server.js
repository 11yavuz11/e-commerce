const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index.js");
const logger = require("morgan");
const app = express();
const port = 3000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

// Middlewares
app.use(logger("dev"));
app.use(express.json());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
