const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;
const URL = require('./connect');
const NAME = "AlcoholAPI"

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(3000, () => {
    MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(NAME);
        collection = database.collection("personnel");
        console.log("Connected to `" + NAME + "`!");
    });
});