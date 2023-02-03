const express = require('express');
const router = express.Router();
const Cards = require('../models/cards.js');
// Remember INDUCES

// Index
router.get('/', (req, res)=>{
    Cards.find({}, (err, foundCards)=>{
        res.json(foundCards);
    });
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Cards.findByIdAndRemove(req.params.id, (err, deletedCard)=>{
        res.json(deletedCard);
    });
});
// Update
router.put('/:id', (req, res)=>{
    Cards.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCard)=>{
        res.json(updatedCard);
    });
});


// Create
router.post('/', (req, res)=>{
    Cards.create(req.body, (err, createdCard)=>{
        // const picGrab = axios.post('https://api.pexels.com/v1/' +
        // `${card.id}`);
        // card.Image = picGrab;
        res.json(createdCard); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Cards.findById(req.params.id, (err, foundCard)=>{
        res.json(foundCard);
    });
});

router.get('/:title', (req, res) =>{
    Cards.findById(req.params.title, (err, foundCard)=>{
        res.json(foundCard);
    });
});
module.exports = router;