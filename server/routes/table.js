const express = require("express");

const { Team } = require("../models/models.js");
const router = express.Router();

router.get("/", async (req, res) => {
  // res.header(headers);
  try {
    const table = await Team.find().sort({ points: -1 });
    res.send(table);
  } catch (err) {
    res.send({
      error: err,
    });
    console.log(err);
  }
});

router.delete("/:team", async (req, res) => {
  try {
    const removedTeam = await Team.deleteOne(
      {
        team: req.params.team,
      },
      {
        $set: {},
      }
    );
    res.json(removedTeam);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const newTeam = new Team({
    teamID: req.body.teamID,
    team: req.body.team,
    played: req.body.played,
    points: req.body.points,
    win: req.body.win,
    draw: req.body.draw,
    loss: req.body.loss,
    goalForward: req.body.goalForward,
    goalAgainst: req.body.goalAgainst,
    goalDifference: req.body.goalDifference,
  });
  try {
    const postedTeam = await newTeam.save();
    res.send(postedTeam);
  } catch (err) {}
});

router.patch("/:team", async (req, res) => {
  try {
    const updatedTeam = await Team.updateOne(
      {
        team: req.params.team,
      },
      {
        $set: req.body,
      }
    );
    res.json(updatedTeam);
  } catch (error) {}
});

module.exports = router;
