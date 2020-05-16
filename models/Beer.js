const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    concentration: {
        type: Number,
        required: true
    },
    type: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    brewer: {
        type: String,
        required: true
    },
    started: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);