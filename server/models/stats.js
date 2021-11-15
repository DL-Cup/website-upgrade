const mongoose = require("mongoose");

const teamStatsSchema = mongoose.Schema({
  team: { type: String, required: true },
  cleansheets: { type: Number, default: 0 },
  goals: { type: Number, default: 0 },
});

const playerStatsSchema = mongoose.Schema({
  name: { type: String, required: true },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
});

module.exports = { teamStatsSchema, playerStatsSchema };
