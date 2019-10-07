import React, { useState } from "react";
import Modal from "./modal.jsx";
import { Helmet } from "react-helmet";
import "./styles.css";

export const Demo4 = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  return (
    <>
      <div className="App">
        <Helmet>
          <title>Demo 4</title>
        </Helmet>
        <Modal
          shown={showModal}
          title="Modal Header"
          width={300}
          onCancel={hideModal}
        >
          This is the content shown in the modal.
          <br />
          Can you confirm?
          <p />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={hideModal}>OK</button>
            <button onClick={hideModal}>Cancel</button>
          </div>
        </Modal>
        <h2>Jump into Spring (for Fall!)</h2>
        <p />
        <button className="launch" onClick={() => setShowModal(true)}>
          Click for Modal
        </button>
      </div>
    </>
  );
};
