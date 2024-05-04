import React, { useState } from "react";
import "./index.css";

export const FunctionalTrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "green", "yellow"];

  const handleNextState = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {colors.map((_, index) => (
          <div
            key={index}
            className={`circle ${index === colorIndex ? "active" : ""}`}></div>
        ))}
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;
