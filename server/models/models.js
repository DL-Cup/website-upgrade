const config = require('config');
const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    team: String, played: Number, points: Number, 
});

const TableModel = mongoose.model('table', tableSchema);

module.exports = {
    TableModel
}