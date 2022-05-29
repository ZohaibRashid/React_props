import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Details contactDetail={props.phone} />
          <Details contactDetail={props.email} />
        </div>
      </div>
    </div>
  );
}
export default Card;
