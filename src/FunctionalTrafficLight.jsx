import React, { useState } from "react";
import "./index.css";

export const FunctionalTrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "yellow", "green"];

  const handleNextState = () => {
    let nextIndex = (colorIndex + 2) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`circle ${
              index === colorIndex ? color : "black"
            }`}></div>
        ))}
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;
