const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  password: { type: String, default: "it's working" },
});

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth;
