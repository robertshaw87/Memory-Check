import React from "react";
import "./Modal.css";

const Modal = props => (
  <div className="col-4 px-1 p-md-2 text-center">
    <div className="card my-2 animated pulse" style={{backgroundImage: `url(${props.image})`}} onClick={() => props.updateClick(props.id)} >
        <div className="placeholder"></div>
    </div>
  </div>
);

export default Modal;
