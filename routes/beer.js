const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

// GETS
// GET1: gets back all the beers
router.get('/', async (req, res) => {
    try {
        const allBeers = await Beer.find();
        res.json(allBeers);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific beer by ID
router.get('/:beerID', async (req,res) => {
    try {
        const beer = await Beer.findById(req.params.beerID);
        res.json(beer);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a beer
router.post('/', async(req, res) => {
    const beer = new Beer({
        name: req.body.name,
    });
    try {
        const savedBeer = await beer.save();
        res.json(savedBeer);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a beer
router.delete('/:beerID',  async (req,res) => {
    try{
        const removedBeer = await Beer.remove({_id: req.params.beerID});
        res.json(removedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a beer
router.patch('/:beerID', async (req,res) => {
    try {
        const updatedBeer = await Beer.findOneAndUpdate(
            {_id: req.params.beerID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;