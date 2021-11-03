const config = require('config');
const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    team: String,
    played: Number, 
    points: Number, 
    win: Number,
    draw: Number,
    loss: Number,
    goalForward: Number,
    goalAgainst: Number,
    goalDifference: {
        type: Number,
        value: 0,
    }
});

const teamSchema = mongoose.Schema({
    team: String,
    cleanSheet: Number,
    players: Array
})

const TableModel = mongoose.model('table', tableSchema);
const TeamModel = mongoose.model('teams', tableSchema);

module.exports = {
    TableModel, TeamModel
}