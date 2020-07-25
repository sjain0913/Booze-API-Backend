const mongoose = require('mongoose');

const BeerSchema = mongoose.Schema({
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
    kind: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    maker: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    prices: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    city: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    region: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    country: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    continent: {
        type: String,
        required: true,
        default: "Not Defined"
    },
    IBU: {
        type: String,
        required: true,
        default: "IBUNotFound"
    },
    calories: {
        type: String,
        required: true,
        default: "CaloriesNotFound"
    },
    carbohydrates: {
        type: String,
        required: true,
        default: "CarbohydratesNotFound"
    }
});

// fix the data discrepencies

module.exports = mongoose.model('Beer', BeerSchema, 'Beer');
