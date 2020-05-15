// http://localhost:3000/posts

const postsRoute = require('./routes/posts.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//remove cors to disallow cross domain access
const cors = require('cors');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

require('dotenv/config');


// Gives us the ability to create routes
const app = express();
app.use(cors());
app.use(bodyParser.json());


// Middlewares: Function that executes when routes are being hit, can be used for authentication
// can use to guide to different routes
app.use('/posts', postsRoute);

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