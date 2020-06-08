const express = require('express');
const router = express.Router();
const Rum = require('../models/Rum');

// GETS
// GET1: gets back all the rum
router.get('/', async (req, res) => {
    try {
        const allRum = await Rum.find();
        res.json(allRum);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific rum by ID
router.get('/:rumID', async (req,res) => {
    try {
        const rum = await Rum.findById(req.params.rumID);
        res.json(rum);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific rum by name
router.get('/:name', async (req,res) => {
    try {
        const rum = await Rum.findOne({name: req.params.name});
        res.json(rum);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a rum
router.post('/', async(req, res) => {
    const rum = new Rum({
        name: req.body.name,
        concentration: req.body.concentration
    });
    try {
        const savedRum = await rum.save();
        res.json(savedRum);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a rum by ID
router.delete('/:rumID',  async (req,res) => {
    try{
        const removedRum = await Rum.remove({_id: req.params.rumID});
        res.json(removedRum);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a rum by ID
router.patch('/:rumID', async (req,res) => {
    try {
        const updatedRum = await Rum.findOneAndUpdate(
            {_id: req.params.rumID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedRum);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;