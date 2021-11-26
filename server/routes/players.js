const express = require("express");

const { Player } = require("../models/models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Player.find().sort({ goals: -1 });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

module.exports = router;
