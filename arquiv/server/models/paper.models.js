const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const papersSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  abstract: { type: String, required: true },
  information: { type: Number, required: false },
}, {
  timestamps: true,
});

const Papers = mongoose.model('Arquiv', papersSchema);

module.exports = Papers;