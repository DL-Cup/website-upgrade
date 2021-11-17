const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  teamId: { type: Number, required: true },
  team: { type: String, required: true },
  players: { type: Array, required: true },
});

const TeamModel = mongoose.model("teams", teamSchema);

module.exports = TeamModel;
