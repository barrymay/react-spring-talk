import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

import "./styles.css";

export const Demo1 = () => {
  const [change, setChange] = useState(false);

  // const springProps = useSpring({
  //   color: change ? "white" : "blue",
  //   backgroundColor: change ? "rgb(223, 145, 0)" : "white",
  //   fontSize: change ? "50px" : "30px",
  //   // transform: change ? "rotateX(180deg)" : "rotateX(0deg)",
  //   // number: !change ? 0 : 10
  // });
  return (
    <div className="App">
      <h2>Jump into Spring (for Fall!)</h2>
      <h3>Toggle State: {change ? "true" : "false"}</h3>
      <button
        // style={springProps}
        className="click-area"
        onClick={() => setChange(!change)}
      >
        Click Me!
        {/* {springProps.number.interpolate(n => n.toFixed(2))} */}
      </button>
    </div>
  );
};
