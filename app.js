require('dotenv/config');
const postsRoute = require('./routes/posts');

const express = require('express');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// Gives us the ability to create routes
const app = express();

// Middlewares: Function that executes when routes are being hit, can be used for authentication
// can use to guide to different routes
app.use('/posts', postsRoute);

// Connect to db
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("connection to db works!");
});

// How to start listening to server
app.listen(3000);