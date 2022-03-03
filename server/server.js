require("dotenv").config();

const express = require("express");
const CORS = require("cors");

const mongoose = require("mongoose");
const Auth = require("./models/auth");
const Match = require("./models/matches");
const Globals = require("./models/globals");

async function main() {
  await mongoose.connect(process.env.LOCAL_DB_CONNECTION);
}

main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(CORS());
app.use(express.json());

app.post("/authenticate", async function (req, res) {
  try {
    const getPassword = async () => await Auth.find();

    let result;

    await getPassword().then((res) => {
      result = res[0].password;
    });

    if (req.body.password === result) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/addfixture", async function (req, res) {
  try {
    let { GWID, teams, schedule } = req.body;
    let matchID;

    async function getNumberOfMatches() {
      let numberOfMatches = await Match.find();
      return numberOfMatches.length;
    }

    // sort alphabetically
    teams.sort();

    await getNumberOfMatches().then((res) => {
      matchID = res + 1;
    });

    await Match({ GWID, matchID, teams, schedule })
      .save()
      .catch((err) =>
        res.status(500).send("An error has occurred. Try again!")
      );

    res.send("Fixture added");
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/setGameweek", async function (req, res) {
  try {
    let { GWID } = req.body;
    let globals = await Globals.findOne();

    if (typeof GWID === "number") {
      globals.GWID = GWID;

      await globals
        .save()
        .then((response) => res.send("Gameweek value updated"))
        .catch(() => res.status(500).send("Try again!"));

      return;
    }

    res.status(400).send("Invalid request");
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/setLive", async function (req, res) {
  try {
    let { Live } = req.body;
    let globals = await Globals.findOne();

    if (typeof Live === "boolean") {
      globals.Live = Live;

      await globals
        .save()
        .then((response) => res.send(`League is ${Live ? "live" : "down"}!`))
        .catch(() => res.status(500).send("Try again!"));

      return;
    }

    res.status(400).send("Invalid request");
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
