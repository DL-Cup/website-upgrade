require("dotenv").config();

const express = require("express");
const CORS = require("cors");

const mongoose = require("mongoose");
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

app.post("/addfixture", async function (req, res) {
  let { GWID, teams, schedule } = req.body;
  let matchID;

  async function getNumberOfMatches() {
    let numberOfMatches = await Match.find();
    return numberOfMatches.length;
  }

  await getNumberOfMatches().then((res) => {
    matchID = res + 1;
  });

  await Match({ GWID, matchID, teams, schedule })
    .save()
    .catch((err) => res.status(400).send("An error has occurred. Try again!"));

  res.send("Fixture added");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
