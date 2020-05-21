const mongoose = require('mongoose');

const WhiskeySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    concentration: {
        type: String,
        required: true,
        default: "0%"
    },
});

module.exports = mongoose.model('Whiskey', WhiskeySchema, 'Whiskey');