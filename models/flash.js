const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const flashCardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: false
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = flashCardSchema