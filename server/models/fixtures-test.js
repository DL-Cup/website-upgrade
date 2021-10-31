const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/dlcup");

  const matchesSchema = mongoose.Schema({
    teams: { type: [String], required: true },
    schedule: { type: Date, required: true },
    score: { type: String, required: true, default: null },
    scorers: { type: [String], required: true, default: null },
  });

  const fixturesSchema = mongoose.Schema({
    matches: { type: [], required: true },
    GWID: { type: String, required: true },
  });

  const GameWeek = mongoose.model("fixtures", fixturesSchema);
  const Match = mongoose.model("Match", matchesSchema);

  const matches = [
    new Match({
      teams: ["Leicester City", "Arsenal"],
      schedule: new Date("October 30, 2021 14:30"),
      score: "0-2",
      scorers: ["Gabriel", "Smith-Rowe"],
    }),
    new Match({
      teams: ["Liverpool", "Brighton Hove Albion"],
      schedule: new Date("October 30, 2021 17:30"),
      score: "2-2",
      scorers: ["Henderson", "Manè", "Mwepu", "Trossard"],
    }),
    new Match({
      teams: ["Tottenham Spurs", "Manchester United"],
      schedule: new Date("October 30, 2021 19:30"),
      score: "0-3",
      scorers: ["Ronaldo", "Cavani", "Rashford"],
    }),
  ];

  const GW = new GameWeek({
    GWID: "1",
    matches: matches,
  });

  GW.save();
}
main().catch((err) => console.log(err));
