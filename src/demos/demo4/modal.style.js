import { css } from "@emotion/react";

export const modalStyle = css`
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modalPage {
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    .modalHeader {
      display: flex;
      align-items: center;
      padding: 4px;
      border-bottom: 1px solid black;
      .title {
        display: flex;
        flex: 1 1 auto;
        font-size: 1.2em;
      }
      .controls {
        display: flex;
        flex: none;
      }
    }
    .modalBody {
      padding: 4px;
    }
  }
`;
