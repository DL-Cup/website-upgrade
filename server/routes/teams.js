const express = require('express');
const {TeamModel} = require('../models/models');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const theTeam = await TeamModel.find();
        res.send(theTeam);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    const newTeam = new TeamModel({
        team: req.body.team,
        cleanSheet: req.body.cleanSheet,
        players: req.body.players,
    });

    try {
        const postedTeam = await newTeam.save();
        res.send(postedTeam);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;