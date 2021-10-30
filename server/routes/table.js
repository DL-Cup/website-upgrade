const { request } = require('express');
const express = require('express');
const {
    TableModel
} = require('../models/models.js');
const router = express.Router();

const headers = {
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
}

router.get('/', async (req, res) => {
    // res.header(headers);
    try {
        const theTable = await TableModel.find();
        console.log(theTable);
        res.send(theTable);
    } catch (err) {
        res.send({
            error: err
        });
        console.log(err)
    }
});

router.delete('/:team', async (req, res) => {
    try {
        const removedTeam = await TableModel.remove({
            team: req.params.team
        }, {
            $set: {}
        });
        res.json(removedTeam);
    } catch (error) {

    }

});

router.post('/', async (req, res) => {
    const newTeam = new TableModel({
        team: req.body.team,
        played: req.body.played,
        points: req.body.points,
        win: req.body.win,
        draw: req.body.draw,
        loss: req.body.loss,
        goalForward: req.body.goalForward,
        goalAgainst: req.body.goalAgainst,
        goalDifference: req.body.goalDifference,
    })
    try {
        const postedTeam = await newTeam.save();
        res.send(postedTeam);
    } catch (err) {
        
    }
});

router.patch('/:team', async (req, res) => {

})

module.exports = router;