const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    hashtags: {
        type: Array,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
