import React, { useState } from 'react'
import flashcardList from './components/flashcard_list';

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const postroutes = require('./routes/posts');
const userRoutes = require("./routes/user");

const path = require("path");

const app = express();

function App() {
   const [cards, setCards] = useState(SAMPLE_CARDS)

   return (
     <flashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: ['2', '3', '5', '4']
  },
  {
    id: 2,
    question: 'What is three + three?',
    answer: '6',
    options: ['2', '6', '8', '4']
  },
];

module.exports = app;
export default App;
