import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light mb-3">
    <span className="navbar-brand mb-0">
      <span><img src="/images/brain.png" alt="Brain" className="animated bounce"/></span>
      Memory Game
    </span>
    <div className="card p-2 px-4">
      <div className="card-body p-0">
        <div className="card-text p-0">
          <p className="m-1">Current Score: {props.currScore}</p>
          <p className="m-1">High Score: {props.highScore}</p>
        </div>
      </div>
    </div>
    <button type="button" className="btn btn-outline-dark py-2 px-4" onClick={props.resetGame}>Reset Game</button>
  </nav>
);

export default Navbar;
