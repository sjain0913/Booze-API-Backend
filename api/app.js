// Link: http://localhost:3000/

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
const vodkaRoute = require('./routes/vodka.js');
const whiskeyRoute = require('./routes/whiskey.js');
const ginRoute = require('./routes/gin.js');
const brandyRoute = require('./routes/brandy.js');
const rumRoute = require('./routes/rum.js');
const tequilaRoute = require('./routes/tequila.js');
const liqueurRoute = require('./routes/liqueur.js');

const app = express();
app.use(cors());      // <== Uncomment when testing frontend (bypasses the crossdomain lock for accessing APIs)
app.use(bodyParser.json());

// Routes
app.use('/api/beer', beerRoute);
app.use('/api/liqueur', liqueurRoute);
app.use('/api/vodka', vodkaRoute);
app.use('/api/whiskey', whiskeyRoute);
app.use('/api/gin', ginRoute);
app.use('/api/brandy', brandyRoute);
app.use('/api/rum', rumRoute);
app.use('/api/tequila', tequilaRoute);

app.get('/', (req, res) => {
    res.send("The Booooze app homepage");
})

app.get('/api', (req, res) => {
    res.send("The API homepage");
})

// Check if connected to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("Connection to MongoDB works!");
});

// Start listening to port 3000
app.listen(3000);

module.exports = app;