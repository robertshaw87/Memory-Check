import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Memory Game</span>
    <p className="mt-3">Current Score: {props.currScore} ||  High Score: {props.highScore}</p>
    <button type="button" className="btn btn-primary" onClick={props.resetGame}>Reset Game</button>
  </nav>
);

export default Navbar;
