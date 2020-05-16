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
const postsRoute = require('./routes/beer.js');
const postsRoute = require('./routes/cider.js');
const postsRoute = require('./routes/mead.js');
const postsRoute = require('./routes/vodka.js');
const postsRoute = require('./routes/whiskey.js');
const postsRoute = require('./routes/gin.js');
const postsRoute = require('./routes/brandy.js');
const postsRoute = require('./routes/rum.js');
const postsRoute = require('./routes/tequila.js');
const postsRoute = require('./routes/absinthe.js');
const postsRoute = require('./routes/everclear.js');

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
app.use('/rum', rumrRoute);
app.use('/tequila', tequilaRoute);
app.use('/absinthe', absintheRoute);
app.use('/everclear', everclearRoute);

postsRoute.get('/beer', (req, res) => {
    res.send("We are on beer");
})

// Check if connected to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("connection to db works!");
});

app.listen(3000);