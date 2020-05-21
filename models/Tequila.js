const mongoose = require('mongoose');

const TequilaSchema = mongoose.Schema({
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

module.exports = mongoose.model('Tequila', TequilaSchema, 'Tequila');