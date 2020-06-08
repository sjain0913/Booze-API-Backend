
const express = require('express');
const router = express.Router();
const Gin = require('../models/Gin');


// GETS
// GET1: gets back all the gins
router.get('/', async (req, res) => {
    try {
        const allGins = await Gin.find();
        res.json(allGins);
    } catch(e) {
        res.json({message: e});
    }
})

// GET2: get specific gin by ID
router.get('/:ginID', async (req,res) => {
    try {
        const gin = await Gin.findById(req.params.ginID);
        res.json(gin);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific gin by name
router.get('/:name', async (req,res) => {
    try {
        const gin = await Gin.findOne({name: req.params.name});
        res.json(gin);
    } catch(e) {
        res.json({message: e});
    }
});

// POSTS
// POST1: submits a gin
router.post('/', async(req, res) => {
    var gin;
    try{
        gin = new Gin({
            name: req.body.name,
            concentration: req.body.concentration
        });
    } catch (f){
        console.log(f);
    }
    try {
        const savedGin = await gin.save();
        res.json(savedGin);
        //console.log("post worked");
    } catch(e) {
        res.json({message: e});
        console.log("post did not work");
    }

});

// POSTS
// POST2: submits many gins
// router.post('/', async(req, res) => {
//     db.collection('ass').insertMany(req.body.ginArray, (err, ass) => {
//         if(err) console.log(err);
//         else console.log("gins Added Successfully");
//     })
// })


// DELETES
// DELETE1: delete a gin by ID
router.delete('/:ginID',  async (req,res) => {
    try{
        const removedGin = await Gin.remove({_id: req.params.ginID});
        res.json(removedGin);
    } catch(e) {
        res.json({message: e});
    }
})

// PATCHES
// PATCH1: update a gin by ID
router.patch('/:ginID', async (req,res) => {
    try {
        const updatedGin = await Gin.findOneAndUpdate(
            {_id: req.params.ginID},
            {$set: {name: req.body.name}}
            );
        res.json(updatedGin);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;