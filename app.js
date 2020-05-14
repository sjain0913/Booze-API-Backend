const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {});