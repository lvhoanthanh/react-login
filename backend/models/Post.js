const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    desc: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.new
    }
});

module.exports = mongoose.model('Post', postSchema);