const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
    Image: String
});

const Cards = mongoose.model('Card', cardSchema);

module.exports = Cards;