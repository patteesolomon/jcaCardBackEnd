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
router.delete('/:id', (req, res)=>{
    Cards.findByIdAndRemove(req.params.id, (err, deletedCard)=>{
        res.json(deletedCard);
    });
});

// Update
router.put('/:id', (req, res)=>{
    Cards.findByIdAndUpdate(req.params.id, req.body.title, (err, card)=>{
        res.json(card);
        res.send('card is here');
    });
});

// Create
router.post('/:id', (req, res) => {
    if (isValid) {
        const title = req.body.title;
        Cards.create(req.body, (err, createdCard) =>
        {
            res.redirect(`/cards`);
        });
        
    } else {
        console.log("Error");
    }
    // (req.body, (err, card)=>{
    //     // const picGrab = axios.post('https://api.pexels.com/v1/' +
    //     // `${card.id}`);
    //     // card.Image = picGrab;
    //     res.json(card); //.json() will send proper headers in response so client knows it's json coming back
    // });
});
router.get('/:title', (req, res, next) =>
{
    var title = req.params.title;
    var t2 = req.body;
    Cards.find({title: title}, function (err, card)
    {
        if (err) {console.error('umm hello? => ' + err);
            return res.redirect('/');
        }
        else
        {
            //res.send({cardo: card});
            res.send(t2);
        }
    });
});

module.exports = router;