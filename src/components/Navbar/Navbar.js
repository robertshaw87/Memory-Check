import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light mb-3">
    <span className="navbar-brand mb-0 h1">Memory Game</span>
    <div className="card">
      <div className="card-body">
        <div className="card-text">
          <p>Current Score: {props.currScore}</p>
          <p>High Score: {props.highScore}</p>
        </div>
      </div>
    </div>
    <button type="button" className="btn btn-primary" onClick={props.resetGame}>Reset Game</button>
  </nav>
);

export default Navbar;
