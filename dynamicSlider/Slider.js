// src/CardSlider.js
import React, { useState } from 'react';
import { Value } from './Value';
import "./Slider.css"

const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 1, Value.length - cardsToShow));
  };

  return (
    <div>
      <div className="card-container">
        {Value.slice(startIndex, startIndex + cardsToShow).map(card => (
          <div key={card.id} className="card">
            <img src={card.Image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handlePrevious} disabled={startIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={startIndex >= Value.length - cardsToShow}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
