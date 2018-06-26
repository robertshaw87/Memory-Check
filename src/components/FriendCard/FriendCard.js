import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="col-4 px-1 p-md-2 text-center">
    <div className="card friend-card my-2" style={{backgroundImage: `url(${props.image})`}} onClick={() => props.updateClick(props.id)} >
        <div className="placeholder"></div>
    </div>
  </div>
);

export default FriendCard;
