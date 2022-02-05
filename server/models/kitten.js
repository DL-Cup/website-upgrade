const mongoose = require("mongoose");

const kittenSchema = mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("kittens", kittenSchema);

module.exports = Kitten;
