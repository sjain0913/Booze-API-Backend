const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

// GETS
// gets back all the beers
router.get('/', async (req, res) => {
    try{
        const beers = await Beer.find();
        res.json(beers);
    } catch(e) {
        res.json({message: e});
    }
})

// get specific beer by ID
router.get('/:beerID', async (req,res) => {
    try{
        const beer = await Beer.findById(req.params.beerID);
        res.json(beer);
    } catch(e) {
        res.json({message: e});
    }
});

// get

// submits a beer
router.post('/', async(req, res) => {
    const beer = new Beer({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedBeer = await post.save();
        res.json(savedBeer);
    } catch(e) {
        res.json({message: e});
    }

});



// delete a beer
router.delete('/:beerID', async (req,res) => {
    try{
        const removedBeer = await Beer.remove({_id: req.params.beerID});
        res.json(removedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

// update a beer
router.patch('/:beerID', async (req,res) => {
    try {
        const updatedBeer = await Beer.updateOne(
            {_id: req.params.beerID},
            {$set: {title: req.body.title}}
            );
        res.json(updatedBeer);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;