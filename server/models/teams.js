const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  team: String,
  cleanSheet: Number,
  players: Array,
});

const TeamModel = mongoose.model("teams", teamSchema);

module.exports = TeamModel;
