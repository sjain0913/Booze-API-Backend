const mongoose = require('mongoose');

const BrandySchema = mongoose.Schema({
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

module.exports = mongoose.model('Brandy', BrandySchema, 'Brandy');