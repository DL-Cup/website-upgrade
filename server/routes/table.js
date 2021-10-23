const express = require('express');
const {
    TableModel
} = require('../models/models.js');
const router = express.Router();

const headers = {
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
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
        const removedTeam = await Table.remove({
            _id: req.params.team
        }, {
            $set: {}
        });
        res.json(removedTeam);
    } catch (error) {

    }

});

module.exports = router;