const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
    {
        Image: String,
        title: String,
        description: String,
        requirement: String,
        SATISFACTION: String,
        SG:  String,
        SALARY :  String,
        SV :  String,
        titleII:  String
    }
);

const Cards = mongoose.model('Card', cardSchema);

module.exports = Cards;