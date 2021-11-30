const mongoose = require("mongoose");
require("dotenv/config");
const { Team } = require("./models/models");

mongoose.connect(
  process.env.DB_CONNECTION, // this part is machine dependent as the local host varies from device to device
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("connected to db");
  }
);

async function createTable() {
  const team1 = new Team({
    team: "Biomed",
    played: 5,
    points: 9,
  });
  const res = await team1.save();
  console.log(res);
}

async function deleteTeam() {
  const res = await Team.deleteOne({ team: "software" });
  console.log(res);
}

createTeam();
