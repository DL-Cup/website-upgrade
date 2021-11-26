const mongoose = require("mongoose");
const Match = require("../matches");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/dlcup");

  const matches = [
    new Match({
      GWID: 1,
      matchID: 1,
      teams: ["Leicester City", "Arsenal"],
      schedule: new Date("October 30, 2021 14:30"),
      score: "0-2",
      scorers: ["Gabriel", "Smith-Rowe"],
    }),
    new Match({
      GWID: 1,
      matchID: 2,
      teams: ["Liverpool", "Brighton Hove Albion"],
      schedule: new Date("October 30, 2021 17:30"),
      score: "2-2",
      scorers: ["Henderson", "Manè", "Mwepu", "Trossard"],
    }),
    new Match({
      GWID: 1,
      matchID: 3,
      teams: ["Tottenham Spurs", "Manchester United"],
      schedule: new Date("October 30, 2021 19:30"),
      score: "0-3",
      scorers: ["Ronaldo", "Cavani", "Rashford"],
    }),
    new Match({
      GWID: 2,
      matchID: 4,
      teams: ["Burnley", "Brentford"],
      schedule: new Date("October 30, 2021 19:30"),
      score: "3-1",
      scorers: ["Wood", "Lowton", "Cornet", "Ghoddos"],
    }),
    new Match({
      GWID: 2,
      matchID: 5,
      teams: ["Aston Villa", "West Ham United"],
      schedule: new Date("October 31, 2021 19:30"),
      score: "1-4",
      scorers: ["Watkins", "Johnson", "Rice", "Fornals", "Bowen"],
    }),
    new Match({
      GWID: 2,
      matchID: 6,
      teams: ["Newcastle United", "Chelsea"],
      schedule: new Date("October 30, 2021 17:00"),
      score: "0-3",
      scorers: ["James", "James", "Jorginho"],
    }),
  ];

  await matches.forEach((match) => match.save());
  console.log("Database updated!");
}

main().catch((err) => console.log(err));
