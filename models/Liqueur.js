const mongoose = require('mongoose');

const LiqueurSchema = mongoose.Schema({
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

module.exports = mongoose.model('Liqueur', LiqueurSchema, 'Liqueur');