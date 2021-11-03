const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  team: String,
  cleanSheet: Number,
  players: Array,
});

const TeamModel = mongoose.model("teams", tableSchema);

const TableModel = require("./table");
const GameWeek = require("./fixtures");

module.exports = {
  TableModel,
  GameWeek,
  TeamModel,
};
