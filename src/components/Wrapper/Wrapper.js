import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
  <div className="container-fluid"> 
    <div className="row">
      <div className="col-0 col-md-1 col-lg-2"></div>
      <div className="col">
        <div className="row">{props.children}</div>
      </div>
      <div className="col-0 col-md-1 col-lg-2"></div>
    </div>
  </div>
);

export default Wrapper;
