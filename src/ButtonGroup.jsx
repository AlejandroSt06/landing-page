
import React, { useState } from 'react';
import "../public/ButtonGroup.css"
import "../public/Slider.css"
import business from "./business.json"
import Slider from './Slider';
import { renderToBufferDestination } from 'astro/runtime/server/render/util.js';
function ButtonGroup() {

  const [buttonStates, setButtonStates] = useState([true, false, false, false]);

  const handleButtonClick = (index) => {
    const updatedStates = [...buttonStates];


    updatedStates.forEach((state, i) => {
      if (state != updatedStates[index]) {
        updatedStates[i] = false
      }
    })

    updatedStates[index] = true;
    // console.log("Cliccato il pulsante " + (index + 1));
    setButtonStates(updatedStates);
  };


  return (
    <>
      <div className="button-container">
        {buttonStates.map((isClicked, index) => (
          <button
            key={index}
            className={`button ${isClicked ? 'clicked' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {business[index].title}
          </button>
        ))}
      </div>

     
        {buttonStates.map((isClicked, index) => (
          isClicked &&
          <div className="slider-container" key={index}>
  
            <Slider businessImages={business[index].images} />
     
          </div>


        ))}
      
    </>
  );
}
export default ButtonGroup;


