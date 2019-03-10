const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Card = new Schema({
  question: String,
  answer: String
});

const CardModel = mongoose.model("Card", Card);

module.exports = CardModel;
