const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv/config"); //go to the .env file and change the database address for mongoose to work

// Routes
const tableRouter = require("./routes/table");
const fixtureRouter = require("./routes/fixtures");

// Connect to the database
mongoose.connect(
  process.env.DB_CONNECTION, // this part is machine dependent as the local host varies from device to device
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("connected to db");
  }
);

// Start exress server
const app = express();

// Tell server we are going to handle json format requests and resposes
app.use(express.json());

// This package must be used to solve the CORS problem
app.use(CORS());

// These are called middlewares that handle our requests (the logic is actually somwhere else)
app.use("/table", tableRouter);
app.use("/fixtures", fixtureRouter);

app.listen(5000, () => {
  console.log(`Server Running on Port: http://localhost:5000`);
});
