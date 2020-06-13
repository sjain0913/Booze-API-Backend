const express = require('express');
const router = express.Router();
const Liqueur = require('../models/Liqueur');

// GETS
// GET1: gets back all the liqueur
router.get('/', async (req, res) => {
    try {
        const allLiqueur = await Liqueur.find();
        res.json(allLiqueur);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific liqueur by ID
router.get('/:liqueurID', async (req,res) => {
    try {
        const liqueur = await Liqueur.findById(req.params.liqueurID);
        res.json(liqueur);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific liqueur by name
router.get('/:name', async (req,res) => {
    try {
        const liqueur = await Liqueur.findOne({name: req.params.name});
        res.json(liqueur);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a liqueur
router.post('/', async(req, res) => {
    const liqueur = new Liqueur({
        name: req.body.name,
        concentration: req.body.concentration
    });
    try {
        const savedLiqueur = await liqueur.save();
        res.json(savedLiqueur);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a liqueur by ID
router.delete('/:liqueurID',  async (req,res) => {
    try{
        const removedLiqueur = await Liqueur.remove({_id: req.params.liqueurID});
        res.json(removedLiqueur);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a liqueur by ID
router.patch('/:liqueurID', async (req,res) => {
    try {
        const updatedLiqueur = await Liqueur.findOneAndUpdate(
            {_id: req.params.liqueurID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedLiqueur);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;