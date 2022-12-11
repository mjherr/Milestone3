import React, { useState } from 'react'
import flashcardList from './components/flashcard_list';

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

export default App;
