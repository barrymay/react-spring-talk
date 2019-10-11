/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { animated, useTransition } from "react-spring";
import { modalStyle } from "./modal.style";

const Modal = ({ children, title, onCancel, width, height, shown }) => {
  const parentDiv = useRef(null);
  useEffect(() => {
    if (shown && parentDiv.current) {
      parentDiv.current.focus();
    }
  }, [shown]);

  const keyHandler = event => {
    if (shown && event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onCancel();
    }
  };

  const transition = useTransition(shown, {
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transition((props, item) => {
    return (
      item && (
        <ModalBody>
          <animated.div
            style={props}
            ref={parentDiv}
            css={modalStyle}
            onKeyDown={keyHandler}
            tabIndex={0}
          >
            <div
              className="modalPage"
              css={css({
                width,
                height
              })}
            >
              <div className="modalHeader">
                <div className="title">{title}</div>
                <div className="controls">
                  <button onClick={onCancel}>X</button>
                </div>
              </div>
              <div className="modalBody">{children}</div>
            </div>
          </animated.div>
        </ModalBody>
      )
    );
  });
};

const ModalBody = ({ shown, children }) => {
  const mainDivRef = useRef(document.createElement("div"));
  const modalRootRef = useRef(document.getElementById("modal-root"));

  useEffect(() => {
    const modalRoot = modalRootRef.current;
    if (!modalRoot) {
      throw new Error("No modal-root exists!");
    }
    const mainDiv = mainDivRef.current;
    modalRoot.appendChild(mainDiv);
    return () => {
      modalRoot.removeChild(mainDiv);
    };
  }, []);

  return createPortal(children, mainDivRef.current);
};

export default Modal;
