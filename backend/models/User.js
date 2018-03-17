const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: 'https://horizons-static.s3.amazonaws.com/horizons_h.png'
    },
    hasTeam: {
        type: Boolean,
        required: true
    },
    bio: {
        type: String
    },
    interests: {
        type: Array
    },
    skills: {
        type: Array
    },
    social: {
        type: Array
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
