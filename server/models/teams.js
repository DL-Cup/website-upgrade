const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  teamID: { type: Number, required: true },
  teamName: { type: String, required: true },
  teamNameAbbr: { type: String, required: true },
  played: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  draws: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  goalsFor: { type: Number, default: 0 },
  goalsAgainst: { type: Number, default: 0 },
  goalDifference: { type: Number, default: 0 },
  lastFive: { type: String },
  cleansheets: { type: Number, default: 0 },
});

const Team = mongoose.model("Teams", teamSchema);

module.exports = Team;
