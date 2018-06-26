import React from "react";
import "./Modal.css";

const Modal = props => (
  <div className="position-absolute modal-background" onClick={props.leaveModal}>
    <div className="card position-relative modal-content p-5">
      <h5 className="card-title text-center">Game Over!</h5>
      <h6 className="card-subtitle mt-1 mb-2 text-muted text-center">{(props.currScore > props.highScore ? "Congratulations! You set a new high score!" : "Better luck next time!")}</h6>
      <div className="card-text mt-4 text-center">
        <p className="m-0">Your Score: {props.currScore}</p>
        <p className="m-0">{(props.currScore > props.highScore ? `Previous High Score: ${props.highScore}` : `High Score: ${props.highScore}`)}</p>
        <p className="text-center mt-4"><button type="button" className="btn btn-outline-dark" onClick={props.leaveModal}>Play Again</button></p>
      </div>
    </div>
  </div>
);

export default Modal;
