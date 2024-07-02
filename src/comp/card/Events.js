// components/Events.js
import React from "react";
import Card from "./card";
import info from "./info";
import DescriptionInput from "./DescriptionInput";
import './cardsy.css'

function Events() {
  return (
    <div className="full">
      <h1 className="heading">Recent EVENTS!</h1>
      {info.map((event) => (
        <Card
          key={event.id}
          name={event.name}
          img={event.imgURL}
          description={event.description}
          redirectTo={event.redirectURL}
        />
      ))}
    </div>
  );
}

export default Events;
