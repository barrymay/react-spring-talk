import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Helmet } from "react-helmet";

import "./styles.css";

export const Demo2 = () => {
  const [change, setChange] = useState(false);

  const springInnerProps = useSpring({
    color: change ? "white" : "blue",
    backgroundColor: change ? "rgb(223, 145, 0)" : "white",
    fontSize: change ? "50px" : "30px",
    transform: change ? "rotateX(180deg)" : "rotateX(0deg)"
  });

  const springOuterProps = useSpring({
    backgroundColor: !change ? "#282828" : "white",
    color: !change ? "white" : "black"
  });

  return (
    <animated.div style={springOuterProps} className="App">
      <Helmet>
        <title>Demo 2</title>
      </Helmet>
      <h2>Jump into Spring (for Fall!)</h2>
      <h3>Toggle State: {change ? "true" : "false"}</h3>
      <div class="container">
        <animated.button
          className="click-area"
          style={springInnerProps}
          onClick={() => setChange(!change)}
        >
          Click on me!
        </animated.button>
      </div>
    </animated.div>
  );
};
