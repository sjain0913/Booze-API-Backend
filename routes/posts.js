const express = require('express');

const router = express.Router();

// ROUTES
// to send stuff its post, patch for updating (deleting and post), delete to remove a post, get to get info
router.get('/', (req, res) => {
    res.send("We are on posts");
})

router.get('/specific', (req, res) => {
    res.send("Specific post");
})

module.exports = router;