const Player = require("./../players");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/dlcup");

  const players = [
    new Player({
      teamName: "IT",
      name: "Barok",
      fname: "Dagim",
      position: "Defender",
      goals: 0,
      assists: 0,
    }),
    new Player({
      teamName: "SFT",
      name: "Nahom",
      fname: "Tamru",
      position: "Midfielder",
      goals: 1,
      assists: 0,
    }),
    new Player({
      teamName: "IT",
      name: "Beken",
      fname: "Adugna",
      position: "Striker",
      goals: 9,
      assists: 0,
    }),
    new Player({
      teamName: "MEC",
      name: "Tesfahun",
      position: "Striker",
      goals: 7,
      assists: 0,
    }),
    new Player({
      teamName: "ELC",
      name: "Biruk",
      position: "Striker",
      goals: 7,
      assists: 0,
    }),
    new Player({
      teamName: "SFT",
      name: "Bemnet",
      position: "Midfielder",
      goals: 5,
      assists: 0,
    }),
    new Player({
      teamName: "BIO",
      name: "Yonas",
      position: "Defender",
      goals: 5,
      assists: 0,
    }),
    new Player({
      teamName: "BIO",
      name: "Abenezer",
      position: "Striker",
      goals: 4,
      assists: 0,
    }),
    new Player({
      teamName: "SFT",
      name: "Biniyam",
      position: "Midfielder",
      goals: 3,
      assists: 0,
    }),
    new Player({
      teamName: "IT",
      name: "Dawit",
      position: "Defender",
      goals: 2,
      assists: 0,
    }),
    new Player({
      teamName: "CIV",
      name: "Finihas",
      position: "Midfielder",
      goals: 1,
      assists: 0,
    }),
  ];

  await players.forEach((player) => player.save());
  console.log("Database updated!");
}

main().catch((err) => console.log(err));
