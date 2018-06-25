import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="col-4 text-center">
    <div className="card m-2" onClick={() => props.updateClick(props.id)} >
        <img className="card-img-top" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
