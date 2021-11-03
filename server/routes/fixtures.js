const express = require("express");

const router = express.Router();
const GameWeek = require("../models/fixtures");

router.get("/:id", async (req, res) => {
  try {
    const result = await GameWeek.find({ GWID: req.params?.id });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

module.exports = router;
