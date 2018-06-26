import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light mb-3">
    <span className="navbar-brand mb-0">
      <span><img src="/images/brain.png" alt="Brain" className="animated bounce"/></span>
      Memory Game
    </span>
    <div className="card p-2">
      <div className="card-body p-0">
        <div className="card-text p-0 container-fluid">
          <div className="row m-0 bg-primary">
            <div className="col-10 p-0">
              Current Score:&nbsp;
          </div>
          <div className="col-2 text-right p-0">{props.currScore}</div>
          </div>
          <div className="row m-0 bg-primary">
            <div className="col-10 p-0">
              High Score:&nbsp;
          </div>
          <div className="col-2 text-right p-0">{props.highScore}</div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" className="btn btn-dark py-2 px-4" onClick={props.resetGame}>Reset Game</button>
  </nav>
);

export default Navbar;
