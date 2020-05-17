const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    concentration: {
        type: Number,
        required: true,
        default: 100
    },
    type: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    ingredients: {
        type: String
    },
    brewer: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    originCity: {
        type: String,       
    },
    originState: {
        type: String,
    },
    originCountry: {
        type: String,
    },
    startDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);