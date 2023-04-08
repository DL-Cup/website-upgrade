const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv/config"); //go to the .env file and change the database address for mongoose to work

// Routes
const tableRoutes = require("./routes/table");
const fixtureRoutes = require("./routes/fixtures");
const playerRoutes = require("./routes/players");

// Connect to the database
mongoose.connect(
  process.env.DB_CONNECTION, // this part is machine dependent as the local host varies from device to device
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

// Start exress server
const app = express();

// Tell server we are going to handle json format requests and resposes
app.use(express.json());

// Solves CORS problems
app.use(CORS());

// Middlewares to handle requests
app.use("/table", tableRoutes);
app.use("/fixtures", fixtureRoutes);
app.use("/players", playerRoutes);

app.listen(5000, () => {
  console.log(`Server Running on Port: http://localhost:5000`);
});
