const express = require('express');
const router = express.Router();
const Mead = require('../models/Mead');

// ROUTES
// to send stuff its post, patch for updating (deleting and post), delete to remove a post, get to get info

// gets back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Mead.find();
        res.json(posts);
    } catch(e) {
        res.json({message: e});
    }
})

// submits a post
router.post('/', async(req, res) => {
    const post = new Mead({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(e) {
        res.json({message: e});
    }

});

// get specific post
router.get('/:postID', async (req,res) => {
    try{
        const post = await Mead.findById(req.params.postID);
        res.json(post);
    } catch(e) {
        res.json({message: e});
    }

});

// delete a post
router.delete('/:postID', async (req,res) => {
    try{
        const removedPost = await Mead.remove({_id: req.params.postID});
        res.json(removedPost);
    } catch(e) {
        res.json({message: e});
    }
})

// update a post
router.patch('/:postID', async (req,res) => {
    try {
        const updatedPost = await Mead.updateOne(
            {_id: req.params.postID},
            {$set: {title: req.body.title}}
            );
        res.json(updatedPost);
    } catch(e) {
        res.json({message: e});
    }
})

module.exports = router;