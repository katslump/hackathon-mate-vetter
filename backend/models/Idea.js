const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hashtags: {
        type: Array
    },
    owner: {
        type: String
    }
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
