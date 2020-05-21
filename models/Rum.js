const mongoose = require('mongoose');

const RumSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    concentration: {
        type: Number,
        required: true,
        default: 0
    },
});

module.exports = mongoose.model('Rum', RumSchema, 'Rum');