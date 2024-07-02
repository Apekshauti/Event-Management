import React from 'react';
import Eventtype from './eventtype';
function Summary({ eventName, eventSubSubType,eventSubType,eventType,eventDate, achievement, duration, Namestudent, onBack, onSubmit }) {
  return (
    <div>
      <h1>Summary</h1>
      <div>
        <p style={{ fontSize: '24px' }}><strong>Name:</strong> {Namestudent}</p>
        {/* <p style={{ fontSize: '24px' }}><strong>Department:</strong> {department}</p> */}
        <p style={{ fontSize: '24px' }}><strong>Event Name:</strong> {eventName}</p>
        <p style={{ fontSize: '24px' }}><strong>Event Type:</strong> {eventType}</p>
        <p style={{ fontSize: '24px' }}><strong>Event Sub Type:</strong> {eventSubType}</p>
        <p style={{ fontSize: '24px' }}><strong>Event SubSub Type:</strong> {eventSubSubType}</p>

        <p style={{ fontSize: '24px' }}><strong>Date of Event:</strong> {eventDate}</p>
        <p style={{ fontSize: '24px' }}><strong>Duration:</strong> {duration}</p>
        <p style={{ fontSize: '24px' }}><strong>Achievement:</strong> {achievement}</p>
      </div>
      <button onClick={onBack} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '18px', marginRight: '10px' }}>Back</button>
      <button onClick={onSubmit} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '18px' }}>Submit</button>
    </div>
  );
}

export default Summary;