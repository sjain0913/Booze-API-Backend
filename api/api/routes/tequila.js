const express = require('express');
const router = express.Router();
const Tequila = require('../models/Tequila');

// GETS
// GET1: gets back all the tequila
router.get('/', async (req, res) => {
    try {
        const allTequila = await Tequila.find();
        res.json(allTequila);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific tequila by ID
router.get('/:tequilaID', async (req,res) => {
    try {
        const tequila = await Tequila.findById(req.params.tequilaID);
        res.json(tequila);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific tequila by name
router.get('/:name', async (req,res) => {
    try {
        const tequila = await Tequila.findOne({name: req.params.name});
        res.json(tequila);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a tequila
router.post('/', async(req, res) => {
    const tequila = new Tequila({
        name: req.body.name,
        concentration: req.body.concentration
    });
    try {
        const savedTequila = await tequila.save();
        res.json(savedTequila);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a tequila by ID
router.delete('/:tequilaID',  async (req,res) => {
    try{
        const removedTequila = await Tequila.remove({_id: req.params.tequilaID});
        res.json(removedTequila);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a tequila by ID
router.patch('/:tequilaID', async (req,res) => {
    try {
        const updatedTequila = await Tequila.findOneAndUpdate(
            {_id: req.params.tequilaID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedTequila);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;