const express = require('express');
const router = express.Router();
const Whiskey = require('../models/Whiskey');

// GETS
// GET1: gets back all the whiskey
router.get('/', async (req, res) => {
    try {
        const allWhiskey = await Whiskey.find();
        res.json(allWhiskey);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific whiskey by ID
router.get('/:whiskeyID', async (req,res) => {
    try {
        const whiskey = await Whiskey.findById(req.params.whiskeyID);
        res.json(whiskey);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific whiskey by name
router.get('/:name', async (req,res) => {
    try {
        const whiskey = await Whiskey.findOne({name: req.params.name});
        res.json(whiskey);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a whiskey
router.post('/', async(req, res) => {
    const whiskey = new Whiskey({
        name: req.body.name,
        concentration: req.body.concentration
    });
    try {
        const savedWhiskey = await whiskey.save();
        res.json(savedWhiskey);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a whiskey by ID
router.delete('/:whiskeyID',  async (req,res) => {
    try{
        const removedWhiskey = await Whiskey.remove({_id: req.params.whiskeyID});
        res.json(removedWhiskey);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a whiskey by ID
router.patch('/:whiskeyID', async (req,res) => {
    try {
        const updatedWhiskey = await Whiskey.findOneAndUpdate(
            {_id: req.params.whiskeyID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedWhiskey);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;