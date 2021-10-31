const mongoose = require("mongoose");

const fixturesSchema = mongoose.Schema({
  matches: { type: [], required: true },
  GWID: { type: String, required: true },
});

const GameWeek = mongoose.model("fixtures", fixturesSchema);

module.exports = GameWeek;
