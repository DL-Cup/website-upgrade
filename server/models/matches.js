const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  state: { type: String, default: "scheduled" },
  GWID: { type: Number, required: true },
  matchID: { type: Number, required: true },
  teams: { type: [String], required: true },
  schedule: { type: Date, required: true },
  score: { type: String, default: null },
  scorers: { type: [String], default: [null] },
});

const Match = mongoose.model("Match", matchesSchema);

module.exports = Match;
