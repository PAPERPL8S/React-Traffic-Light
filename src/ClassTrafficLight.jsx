import React, { Component } from "react";
import "./index.css";

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      colors: ["red", "green", "yellow"],
    };
  }

  handleNextState = () => {
    this.setState((prevState) => ({
      colorIndex: (prevState.colorIndex + 1) % 3,
    }));
  };

  render() {
    const { colorIndex, colors } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`circle ${
                index === colorIndex ? color : "black"
              }`}></div>
          ))}
        </div>
        <button className="next-state-button" onClick={this.handleNextState}>
          Next State
        </button>
      </div>
    );
  }
}

export default ClassTrafficLight;
