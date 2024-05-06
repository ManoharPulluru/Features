import React, { useState } from 'react';
import '../Guide.css';

const MeetingPoint = ({
  meetingPointName,
  setMeetingPointName,
  pricePerPaxMeeting,
  setpricePerPaxMeeting,
  addRecommendations,
  setAddRecommendations,
  thingsToNote,
  setThingsToNote
}) => {

  const handleMeetingPointNameChange = (e) => {
    setMeetingPointName(e.target.value);
  };

  const handlepricePerPaxMeetingChange = (e) => {
    setpricePerPaxMeeting(e.target.value);
  };

  const handleAddRecommendationsChange = (e) => {
    setAddRecommendations(e.target.value);
  };

  const handleThingsToNoteChange = (e) => {
    setThingsToNote(e.target.value);
  };



  return (
    <>
      <div className="MeetingPointDiv">
        <div className="guideFormTitle">Meeting Point</div>
        <div className="productPricingData">
          <input
            placeholder="Meeting Point Name"
            value={meetingPointName}
            onChange={handleMeetingPointNameChange}
            className="typeOfAct"
          />
          <input
            placeholder="Price Per Pax"
            value={pricePerPaxMeeting}
            onChange={handlepricePerPaxMeetingChange}
            className="typeOfAct"
          />
          <div className="onArrivalDiv">On Arrival</div>
          <input
            placeholder="Add Recommendations"
            value={addRecommendations}
            onChange={handleAddRecommendationsChange}
            className="typeOfAct"
          />
          <div className="onArrivalDiv">Things to Note</div>
          <input
            placeholder="Things to Note"
            value={thingsToNote}
            onChange={handleThingsToNoteChange}
            className="typeOfAct"
          />
        </div>
      </div>
    </>
  );
};

export default MeetingPoint;
