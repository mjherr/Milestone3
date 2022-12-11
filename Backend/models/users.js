const mongoose = require('mongoose');


//Schema
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength: 1024
    }
}));

function validateUser(user) {
    const schema = {
        name: string
    }
}

exports.User = User;
exports.validate = validateUser;