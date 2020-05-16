// Link: http://localhost:3000/posts

// Requiring modules
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Requiring routes
const beerRoute = require('./routes/beer.js');
const ciderRoute = require('./routes/cider.js');
const meadRoute = require('./routes/mead.js');
const vodkaRoute = require('./routes/vodka.js');
const whiskeyRoute = require('./routes/whiskey.js');
const ginRoute = require('./routes/gin.js');
const brandyRoute = require('./routes/brandy.js');
const rumRoute = require('./routes/rum.js');
const tequilaRoute = require('./routes/tequila.js');
const absintheRoute = require('./routes/absinthe.js');
const everclearRoute = require('./routes/everclear.js');

const app = express();
// app.use(cors());      <== Uncomment when testing frontend (bypasses the crossdomain lock for accessing APIs)
app.use(bodyParser.json());

// Routes
app.use('/beer', beerRoute);
app.use('/cider', ciderRoute);
app.use('/mead', meadRoute);
app.use('/vodka', vodkaRoute);
app.use('/whiskey', whiskeyRoute);
app.use('/gin', ginRoute);
app.use('/brandy', brandyRoute);
app.use('/rum', rumRoute);
app.use('/tequila', tequilaRoute);
app.use('/absinthe', absintheRoute);
app.use('/everclear', everclearRoute);

app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE!");
})

beerRoute.get('/beer', (req, res) => {
    console.log("BEER PAGE");
    res.send("We are on beer");
})

// Check if connected to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("connection to db works!");
});

// Start listening to port 3000
app.listen(3000);