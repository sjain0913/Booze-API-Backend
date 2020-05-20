const beerRoute = require('../routes/beer');
const Beer = require('../models/Beer');

var beer = {"name": "ass"}
beerObject = new Beer(beer);

beerObject.save();
