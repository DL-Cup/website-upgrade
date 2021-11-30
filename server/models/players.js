const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  playerID: { type: Number },
  teamName: { type: String, required: true },
  name: { type: String, required: true },
  fname: { type: String },
  nickname: { type: String },
  position: { type: String, required: true },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
