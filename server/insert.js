const mongoose = require("mongoose");
require("dotenv/config");
const { TableModel } = require("./models/models");

mongoose.connect(
  process.env.DB_CONNECTION, // this part is machine dependent as the local host varies from device to device
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("connected to db");
  }
);

async function createTable() {
  const team1 = new TableModel({
    team: "Biomed",
    played: 5,
    points: 9,
  });
  const res = await team1.save();
  console.log(res);
}

async function deleteTeam() {
  const res = await TableModel.deleteOne({ team: "software" });
  console.log(res);
}

createTeam();
