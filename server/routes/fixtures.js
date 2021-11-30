const express = require("express");

const router = express.Router();
const Match = require("../models/matches");

router.get("/", async (req, res) => {
  try {
    const result = await Match.find();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Match.find({ GWID: req.params?.id });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

router.get("/team/:teamName", async (req, res) => {
  try {
    const result = await Match.find({
      teams: { $elemMatch: { $eq: req.params?.teamName } },
    }).sort({ matchID: -1 });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

module.exports = router;
