const express = require('express');
const router = express.Router();
const Vodka = require('../models/Vodka');

// GETS
// GET1: gets back all the vodka
router.get('/', async (req, res) => {
    try {
        const allVodka = await Vodka.find();
        res.json(allVodka);
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

// GET3: get specific vodka by name
router.get('/:name', async (req,res) => {
    try {
        const vodka = await Vodka.findOne({name: req.params.name});
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
        concentration: req.body.concentration
    });
    try {
        const savedVodka = await vodka.save();
        res.json(savedVodka);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a vodka by ID
router.delete('/:vodkaID',  async (req,res) => {
    try{
        const removedVodka = await Vodka.remove({_id: req.params.vodkaID});
        res.json(removedVodka);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a vodka by ID
router.patch('/:vodkaID', async (req,res) => {
    try {
        const updatedVodka = await Vodka.findOneAndUpdate(
            {_id: req.params.vodkaID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedVodka);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;