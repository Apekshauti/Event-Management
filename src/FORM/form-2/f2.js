import React, { useState } from 'react';
import './f2.css';

function Eventorg() {
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [entryFeeNeeded, setEntryFeeNeeded] = useState(false);
  const [eventLocation, setEventLocation] = useState('');
  const [organizedBy, setOrganizedBy] = useState('');
  const [eventHeadline, setEventHeadline] = useState('');
  const [budgetFile, setBudgetFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      eventName,
      eventType,
      eventDate,
      eventTime,
      entryFeeNeeded,
      eventLocation,
      organizedBy,
      eventHeadline,
      budgetFile,
      bannerFile,
      proposalFile
    });
  };

  return (
    <div>    
    <h1 className='he'>For Organising An Event Please Enter All The Details </h1>
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </label>
      <br />
      <label>
        Type of Event:
        <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} />
      </label>
      <br />
      <label>
        Date of Event:
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
      </label>
      <br />
      <label>
        Time of Event:
        <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
      </label>
      <br />
      <label>
        Entry Fee Needed:
        <input type="checkbox" checked={entryFeeNeeded} onChange={(e) => setEntryFeeNeeded(e.target.checked)} />
      </label>
      <br />
      <label>
        Location of the Event:
        <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Organized By:
        <input type="text" value={organizedBy} onChange={(e) => setOrganizedBy(e.target.value)} />
      </label>
      <br />
      <label>
        Headline of the Event:
        <input type="text" value={eventHeadline} onChange={(e) => setEventHeadline(e.target.value)} />
      </label>
      <br />
      <label>
        Budget Planning (PDF):
        <input type="file" accept="application/pdf" onChange={(e) => setBudgetFile(e.target.files[0])} />
      </label>
      <br />
      <label>
        Banner (PDF):
        <input type="file" accept="application/pdf" onChange={(e) => setBannerFile(e.target.files[0])} />
      </label>
      <br />
      <label>
        Proposal (PDF):
        <input type="file" accept="application/pdf" onChange={(e) => setProposalFile(e.target.files[0])} />
      </label>
      <br />
      <button type="submit" className='Button_su'><div className='button-content '>Submit</div></button>
    </form>
    </div>
  );
}

export default Eventorg;
