const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const thymesSchema = Schema({
    name: String,
    description: String,
    image: String,
    instructions: String,
    ingredients: String,
    indica: Boolean
    sativa: Boolean
});

const Thymes = mongoose.model('Thymes', thymesSchema);

module.exports = Thymes;
