const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

// change structure of try catch to be inside only
// GETS
// GET1: gets back all the beers
try {
    router.get('/', async (req, res) => {
        try {
            const allBeers = await Beer.find();
            res.json(allBeers);
        } catch(e) {
            // add status codes
            res.json({message: e});
        }
    })
} catch(f) {
    console.log(f)
}


// GET2: get specific beer by ID
router.get('/:beerID', async (req,res) => {
    try {
        const beer = await Beer.findById(req.params.beerID);
        res.json(beer);
    } catch(e) {
        res.json({message: e});
    }
});

// GET3: get specific beer by name
router.get('/:name', async (req,res) => {
    try {
        const beer = await Beer.findOne({name: req.params.name});
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
        concentration: req.body.concentration
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
// DELETE1: delete a beer by ID
router.delete('/:beerID',  async (req,res) => {
    try{
        const removedBeer = await Beer.remove({_id: req.params.beerID});
        res.json(removedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

// DELETE2: delete a beer by name
// router.delete('/:name',  async (req,res) => {
//     try{
//         const removedBeer = await Beer.remove({name: req.params.name});
//         res.json(removedBeer);
//     } catch(e) {
//         res.json({message: e});
//     }
// })

// PATCHES
// PATCH1: update a beer by ID
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
