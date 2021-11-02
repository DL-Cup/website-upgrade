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

const TableModel = mongoose.model('table', tableSchema);

module.exports = {
    TableModel
}