const mongoose = require("mongoose");

const globalsSchema = mongoose.Schema({
  GWID: { type: Number, default: 1 },
  Live: { type: Boolean, default: false },
});

const Globals = mongoose.model("globals", globalsSchema);

module.exports = Globals;
