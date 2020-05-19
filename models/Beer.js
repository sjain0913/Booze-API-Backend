const mongoose = require('mongoose');

const BeerSchema = mongoose.Schema({
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
    type: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    IBU: {
        type: Number,
        default: 0
    },
    brewer: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    origin: {
        type: String,
        default: "Not Defined"  
    },
    nutrition: {
        type: Map,
        of: Number,
        default: {
            calories: 0,
            carbohydrates: 0,
        }
    }
});

module.exports = mongoose.model('Beer', BeerSchema, 'Beer');