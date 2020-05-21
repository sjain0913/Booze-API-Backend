const beerRoute = require('../../routes/beer');
const Beer = require('../../models/Beer');
const express = require('express');
const router = express.Router();

var beer = {"name": "ass"}
beerObject = new Beer(beer);
beerObject.save();
