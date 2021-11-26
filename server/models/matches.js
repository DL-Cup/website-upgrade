const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  GWID: { type: Number, required: true },
  matchID: { type: Number, required: true },
  teams: { type: [String], required: true },
  schedule: { type: Date, required: true },
  score: { type: String, required: true, default: null },
  scorers: { type: [String], required: true, default: null },
});

const Match = mongoose.model("Match", matchesSchema);

module.exports = Match;
