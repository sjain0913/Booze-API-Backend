const express = require('express');
const router = express.Router();
const Vodka = require('../models/Vodka');

// GETS
// GET1: gets back all the beers
router.get('/', async (req, res) => {
    try {
        const allVodkas = await Vodka.find();
        res.json(allVodkas);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific vodka by ID
router.get('/:vodkaID', async (req,res) => {
    try {
        const vodka = await Vodka.findById(req.params.vodkaID);
        res.json(vodka);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a vodka
router.post('/', async(req, res) => {
    const vodka = new Vodka({
        name: req.body.name,
    });
    try {
        const savedBeer = await vodka.save();
        res.json(savedBeer);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a vodka
router.delete('/:beerID',  async (req,res) => {
    try{
        const removedVodka = await Vodka.remove({_id: req.params.beerID});
        res.json(removedVodka);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a vodka
router.patch('/:beerID', async (req,res) => {
    try {
        const updatedBeer = await Vodka.findOneAndUpdate(
            {_id: req.params.beerID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;