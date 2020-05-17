const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

// GETS
// GET1: gets back all the beers
router.get('/beer', async (req, res) => {
    try {
        const beers = await Beer.find();
        res.json(beers);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific beer by ID
router.get('/beer/:beerID', async (req,res) => {
    try {
        const beer = await Beer.findById(req.params.beerID);
        res.json(beer);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a beer
router.post('/beer', async(req, res) => {
    const beer = new Beer({
        name: req.body.name,
    });
    try {
        const savedBeer = await post.save();
        res.json(savedBeer);
    } catch(e) {
        res.json({message: e});
    }

});


// DELETES
// DELETE1: delete a beer
router.delete('/beer/:beerID', async (req,res) => {
    try{
        const removedBeer = await Beer.remove({_id: req.params.beerID});
        res.json(removedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a beer
router.patch('/beer/:beerID', async (req,res) => {
    try {
        const updatedBeer = await Beer.updateOne(
            {_id: req.params.beerID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;