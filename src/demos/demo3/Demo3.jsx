import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./styles.css";

// on every call, updates result function for springs to run
function springFunc(itemClicked) {
  return function(itemIndex) {
    // processes 1, 2, 3, 4 (per spring)
    const config = {
      // friction: 120 // note the cancel of the unused spring
      // friction: 5 // note the spring
    };
    const result =
      itemIndex === itemClicked
        ? {
            fontSize: "36px",
            backgroundColor: "green",
            color: "white",
            //transform: "rotateX(360deg)",
            config
          }
        : {
            fontSize: "18px",
            backgroundColor: "#CCCCCC",
            color: "black",
            //transform: "rotateX(0deg)",
            config
          };
    return result;
  };
}

const AnimatedList = ({ items }) => {
  const [lastSelection, setLastSelection] = useState(-1);

  // NOTE: Even the first use of the springs must return all animated props
  const [springs, setSprings] = useSprings(
    items.length,
    springFunc(lastSelection)
  );

  // toggles button if clicked twice
  const selectSpring = selection => {
    const nextSelection = lastSelection === selection ? -1 : selection;
    setLastSelection(nextSelection);
    setSprings(springFunc(nextSelection));
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {springs.map((props, i) => {
        return (
          <animated.button
            key={i}
            className="click-list"
            style={props}
            children={items[i]}
            onClick={() => selectSpring(i)}
          />
        );
      })}
    </div>
  );
};

export const Demo3 = () => (
  <>
    <h2>Jump into Spring (for Fall!)</h2>
    <AnimatedList items={"Welcome to ReactNYC S3:E7!".split(" ")} />
  </>
);
