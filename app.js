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
const postsRoute = require('./routes/posts.js');

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

postsRoute.get('/', (req, res) => {
    res.send("We are on posts");
})

// Connect to db
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("connection to db works!");
});

// How to start listening to server
app.listen(3000);