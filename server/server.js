require("dotenv").config();

const express = require("express");
const CORS = require("cors");

const mongoose = require("mongoose");
const Kitten = require("./models/kitten");
const Match = require("./models/matches");

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION);
}

main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(CORS());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/addfixture", async (req, res) => {
  let { GWID, teams, schedule } = req.body;
  let matchID = 1;

  await Match({ GWID, matchID, teams, schedule })
    .save()
    .catch(() => {
      res.send("Error");
    });
  res.send("Fixture added");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
