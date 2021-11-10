const mongoose = require("mongoose");
const GameWeek = require("./fixtures");
const Match = require("./matches");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/dlcup");

  // const matchesSchema = mongoose.Schema({
  //   teams: { type: [String], required: true },
  //   schedule: { type: Date, required: true },
  //   score: { type: String, required: true, default: null },
  //   scorers: { type: [String], required: true, default: null },
  // });

  // const fixturesSchema = mongoose.Schema({
  //   matches: { type: [], required: true },
  //   GWID: { type: String, required: true },
  // });

  // const GameWeek = mongoose.model("fixtures", fixturesSchema);
  // const Match = mongoose.model("Match", matchesSchema);

  const matchesGW1 = [
    new Match({
      matchID: 1,
      teams: ["Leicester City", "Arsenal"],
      schedule: new Date("October 30, 2021 14:30"),
      score: "0-2",
      scorers: ["Gabriel", "Smith-Rowe"],
    }),
    new Match({
      matchID: 2,
      teams: ["Liverpool", "Brighton Hove Albion"],
      schedule: new Date("October 30, 2021 17:30"),
      score: "2-2",
      scorers: ["Henderson", "Manè", "Mwepu", "Trossard"],
    }),
    new Match({
      matchID: 3,
      teams: ["Tottenham Spurs", "Manchester United"],
      schedule: new Date("October 30, 2021 19:30"),
      score: "0-3",
      scorers: ["Ronaldo", "Cavani", "Rashford"],
    }),
  ];

  const GW1 = new GameWeek({
    GWID: "1",
    matches: matchesGW1,
  });

  GW1.save();
  /// Gameweek 2

  const matchesGW2 = [
    new Match({
      matchID: 4,
      teams: ["Burnley", "Brentford"],
      schedule: new Date("October 30, 2021 19:30"),
      score: "3-1",
      scorers: ["Wood", "Lowton", "Cornet", "Ghoddos"],
    }),
    new Match({
      matchID: 5,
      teams: ["Aston Villa", "West Ham United"],
      schedule: new Date("October 31, 2021 19:30"),
      score: "1-4",
      scorers: ["Watkins", "Johnson", "Rice", "Fornals", "Bowen"],
    }),
    new Match({
      matchID: 6,
      teams: ["Newcastle United", "Chelsea"],
      schedule: new Date("October 30, 2021 17:00"),
      score: "0-3",
      scorers: ["James", "James", "Jorginho"],
    }),
  ];

  const GW2 = new GameWeek({
    GWID: "2",
    matches: matchesGW2,
  });

  GW2.save();
}
main().catch((err) => console.log(err));
