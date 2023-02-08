const express = require('express');
const router = express.Router();
const Cards = require('../models/cards.js');
// Remember INDUCES
var isValid = false;
// Index
router.get('/', (req, res)=>{
    Cards.find({}, (err, foundCards)=>{
        res.json(foundCards);
    });
});
// New - Will be handled by React application
// Delete
router.delete('/:id/title', (req, res)=>{
    Cards.findByIdAndRemove(req.params.id, (err, deletedCard)=>{
        res.json(deletedCard);
    });
});

// Update
router.put('/:id/title', (req, res)=>{
    Cards.findByIdAndUpdate(req.params.id, req.body.id, (err, card)=>{
        res.json(card);
    });
});

// Create
router.post('/:id/title', (req, res) => {
    if (isValid) {
        //Cards.push({ title: req.body.title });
        Cards.create(req.body, (err, createdCard) =>
        {
            res.redirect(`/cards`);
        });
        
    } else {
        console.log("Error");
        res.render("cards/new", {title : req.body.title});
    }
    
    
    // (req.body, (err, card)=>{
    //     // const picGrab = axios.post('https://api.pexels.com/v1/' +
    //     // `${card.id}`);
    //     // card.Image = picGrab;
    //     res.json(card); //.json() will send proper headers in response so client knows it's json coming back
    // });
});
// Edit - Will be handled by  application
// Show
// router.get('/:id', (req, res)=>{
//     Cards.findById(req.parReactams.id, (err, foundCard)=>{
//         res.json(foundCard);
//     });
// });

router.get('/:id/title', (req, res) =>{
    Cards.findById(req.params.id, (err, foundCard)=>{
        if (foundCard != null) {
            res.json(foundCard);
            isValid = true;
        }
        else{
            console.error(err);
        }
    });
});

module.exports = router;