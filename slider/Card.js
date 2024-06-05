
import React, { useState } from 'react';
import './App.css';
import { Value } from './Value';
const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // const index = currentIndex === 0 ? Value.length - 1 : currentIndex - 1;
    // setCurrentIndex(index);
          
            let index;
          if (currentIndex===0){
            index= Value.length-1
            
          }
          else{
            index=currentIndex-1
          }
          setCurrentIndex(index)

  };

  const nextSlide = () => {
    // const index = currentIndex === Value.length - 1 ? 0 : currentIndex + 1;
    // setCurrentIndex(index);

    let index;
    if(currentIndex===Value.length-1){
      index=0
    }else{
      index=currentIndex+1
    }
    setCurrentIndex(index)

  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        {Value.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={slide.Image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Card;
