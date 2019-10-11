/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Suspense, useRef, useState } from "react";
// TODO: There's a conflict between react-spring and react-spring/three that's causing a working conflict
// when both are in the same project. This is the reason demo5 is commented out
// note that https://codesandbox.io/s/react-spring-5-final-demo-v9-c0y4s works fine in a standalone func
import { animated, useSpring, useTransition } from "react-spring/three";
import "./styles.css";
import { ThreeText } from "./ThreeText";

export const TextLines = ({ floatIn }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const spring = useSpring({
    config: {
      friction: 10
    },
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    rotation: active ? [0, 2 * Math.PI, 0] : [0, 0, 0]
  });

  const transitions = useTransition(floatIn, null, {
    config: {
      friction: 250
    },
    from: { position: [0, 150, -150] },
    enter: { position: [0, 0, 0] },
    leave: { position: [0, -50, 150] }
  });

  return (
    <animated.mesh
      onClick={() => {
        return setActive(!active);
      }}
      scale={spring.scale}
    >
      <Suspense fallback={null}>
        {transitions.map(({ item, key, props }) => {
          return (
            item && (
              <animated.group
                key={key}
                position={props.position}
                rotation={spring.rotation}
                ref={ref}
              >
                <ThreeText position={[0, 5, 0]} children="Thank" />
                <ThreeText position={[0, 0, 0]} children="You" />
                <ThreeText position={[0, -5, 0]} children="ReactNYC!" />
              </animated.group>
            )
          );
        })}
      </Suspense>
    </animated.mesh>
  );
};
