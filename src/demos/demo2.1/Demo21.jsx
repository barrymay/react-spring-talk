import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import { Helmet } from "react-helmet";

import "./styles.css";

export const Demo21 = () => {
  const [change, setChange] = useState(false);
  const springFunc = item => {
    return item === 0
      ? {
          backgroundColor: !change ? "#282828" : "white",
          color: !change ? "white" : "black"
        }
      : {
          top: !change ? "0px" : "200px",
          color: change ? "white" : "blue",
          backgroundColor: change ? "rgb(223, 145, 0)" : "white",
          fontSize: change ? "50px" : "30px",
          transform: change ? "rotateX(180deg)" : "rotateX(0deg)"
        };
  };
  const [springs, setSprings] = useSprings(2, springFunc);
  setSprings(springFunc);
  return (
    <animated.div style={springs[0]} className="App">
      <Helmet>
        <title>Demo 2.1</title>
      </Helmet>
      <h2>Jump into Spring (for Fall!)</h2>
      <h3>Toggle State: {change ? "true" : "false"}</h3>
      <div className="container">
        <animated.button
          style={springs[1]}
          className="click-area"
          onClick={() => setChange(!change)}
        >
          Click on me!
        </animated.button>
      </div>
    </animated.div>
  );
};
