// components/Card.js
import React from "react";
import DescriptionInput from "./DescriptionInput";

function Card({ img, name, redirectTo }) {
  const handleViewMore = () => {
    // Redirect to the specified URL
    window.location.href = redirectTo;
  };

  return (
    <div className="box">
      <img className="circle-img" src={img} alt="event_img" />
      <div className="content">
        <h2 className="name">{name}</h2>
        <button className="btn" onClick={handleViewMore}>VIEW MORE</button>
      </div>
      <DescriptionInput />
    </div>
  );
}

export default Card;
