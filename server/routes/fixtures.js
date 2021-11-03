const express = require("express");

const router = express.Router();
const GameWeek = require("../models/fixtures");

router.get("/", async (req, res) => {
  try {
    // const result = await GameWeek.find({ GWID: req.params?.id });
    const result = await GameWeek.find({});
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

module.exports = router;
