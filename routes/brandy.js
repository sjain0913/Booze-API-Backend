const express = require('express');
const router = express.Router();
const Brandy = require('../models/Brandy');

// GETS
// GET1: gets back all the brandy
router.get('/', async (req, res) => {
    try {
        const allBrandy = await Brandy.find();
        res.json(allBrandy);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific brandy by ID
router.get('/:brandyID', async (req,res) => {
    try {
        const brandy = await Brandy.findById(req.params.brandyID);
        res.json(brandy);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific brandy by name
router.get('/:name', async (req,res) => {
    try {
        const brandy = await Brandy.findOne({name: req.params.name});
        res.json(brandy);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a brandy
router.post('/', async(req, res) => {
    const brandy = new Brandy({
        name: req.body.name,
        concentration: req.body.concentration
    });
    try {
        const savedBrandy = await brandy.save();
        res.json(savedBrandy);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        //console.log("post did not work");
    }

});


// DELETES
// DELETE1: delete a brandy by ID
router.delete('/:brandyID',  async (req,res) => {
    try{
        const removedBrandy = await Brandy.remove({_id: req.params.brandyID});
        res.json(removedBrandy);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a brandy by ID
router.patch('/:brandyID', async (req,res) => {
    try {
        const updatedBrandy = await Brandy.findOneAndUpdate(
            {_id: req.params.brandyID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedBrandy);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;