//dependencies
const { Router } = require('express');
const express = require('express')
const cards = express.Router()
const Cards = require('../models/card.js')


//GET for all flashcards

cards.get('/', card_controller.getAllCards);

//GET one flashcard
cards.get('/:id', card_controller.getOneCard);

//Create a Flashcard

cards.post('/', (req, res) => {
    const {question, answer} = req.body;
    if (question && answer) {
        const flashcard = {
            question,
            answer,
        };
        //Save to database
        res.status(201).json(flashcard);
    }else{
        //Send an error
        res.status(400).json({message: 'Please provide both a question and an answer'});
    }
});

//Update a Flashcard

cards.put('/:id', async(req, res) => {
    try{
        const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body);
        res.json(flashcard);
    }catch(e) {
        res.status(400).json({message: e.message});
    }
});

//Delete a Flashcard

cards.delete('/:id', (req, res) => {
    cards.findByIdAndDelete(req.params.id)
    .then(() => res.json('Flashcard deleted successfully!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = cards