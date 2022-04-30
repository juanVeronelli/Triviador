const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    email: String,
    password: String
});

const model = mongoose.model('User', mySchema);
module.exports = model;