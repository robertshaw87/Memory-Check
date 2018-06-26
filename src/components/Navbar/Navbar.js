import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light mb-3">
    <span className="navbar-brand py-0 mb-0">
      <span><img src="/images/brain.png" alt="Brain" className="animated bounce mr-2 d-none d-md-inline-block"/></span>
      <span className="brand-text">Memory Game</span>
    </span>
    <span className="score-display mb-2 m-0 mx-sm-5">
    <div className="container">
      <div className="row m-0">
        <div className="col-11 p-0 score-text">Current Score:&nbsp;</div>
        <div className="col-1 text-right p-0 score-text">{props.currScore}</div>
      </div>
      <div className="row m-0">
        <div className="col-11 p-0 score-text">High Score:&nbsp;</div>
        <div className="col-1 text-right p-0 score-text">{props.highScore}</div>
      </div>
    </div>
    </span>
    <button type="button" className="btn btn-dark py-2 px-4 ml-lg-5" onClick={props.resetGame}>Reset Game</button>
  </nav>
);

export default Navbar;
