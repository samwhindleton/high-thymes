const express = require('express')
const router = express.Router();
const Thymes = require('../models/thymes.js')

router.get('/', (req,res)=>{
    Thymes.find({}, (err, foundthymes)=>{
        res.json(foundthymes);
    });
});

router.post('/', (req,res)=>{
    Thymes.create(req.body, (err, createdThymes)=>{
        res.json(createdThymes);
    });
});

router.delete('/:id', (req,res)=>{
    Thymes.findByIdAndRemove(req.params.id,(err, deletedThymes)=>{
        res.json(deletedThymes);
    });
});

router.put('/:id', (req,res)=>{
    Thymes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedThymes)=>{
        res.json(updatedThymes);
    });
});




module.exports = router;
