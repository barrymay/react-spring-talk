/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, useState, useRef, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";
import { TextLines } from "./TextLines";
import { Starfield } from "./StarField";
import { Helmet } from "react-helmet";

export const Demo5 = () => {
  const [floatIn, setFloatIn] = useState(false);
  const buttonFocus = useRef(null);
  useEffect(() => {
    buttonFocus.current.focus();
  });
  return (
    <Fragment>
      <Helmet>
        <title>Demo 5</title>
      </Helmet>
      <div>
        <h2>Jump into Spring (for Fall!)</h2>
        <div className="controls">
          <button
            ref={buttonFocus}
            css={css`
              display: flex;
              background-color: transparent;
              outline: none;
              color: white;
              border: 1px solid white;
              border-radius: 4px;
            `}
            onClick={e => {
              return setFloatIn(!floatIn);
            }}
          >
            {floatIn ? "Leave" : "Enter"}
          </button>
        </div>
      </div>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <pointLight color="#C15400" intensity={3} position={[-25, 25, 75]} />
        <TextLines floatIn={floatIn} />
        <Starfield />
      </Canvas>
    </Fragment>
  );
};
