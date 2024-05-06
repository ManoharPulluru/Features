import React, { useState } from 'react';
import "./Availabilty.css";
import '../Guide.css';


const Availability = ({
  language,
  setLanguage,
  isAllBookingsAllowed,
  setIsAllBookingsAllowed,
  isPrior3hBookingAllowed,
  setIsPrior3hBookingAllowed,
  startTime,
  setStartTime,
  startAt,
  setStartAt,
  endTime,
  setEndTime,
  endAt,
  setEndAt,
  daysOfActivity,
  setDaysOfActivity,
  paxLimit,
  setPaxLimit,
  lastMinuteEditBooking,
  setLastMinuteEditBooking,
  lastMinuteEditBookingFree,
  setLastMinuteEditBookingFree
}) => {
  // const [language, setLanguage] = useState('');
  // const [isAllBookingsAllowed, setIsAllBookingsAllowed] = useState('');
  // const [isPrior3hBookingAllowed, setIsPrior3hBookingAllowed] = useState('');
  // const [startTime, setStartTime] = useState('');
  // const [startAt, setStartAt] = useState('');
  // const [endTime, setEndTime] = useState('');
  // const [endAt, setEndAt] = useState('');
  // const [daysOfActivity, setDaysOfActivity] = useState([" "]);
  // const [paxLimit, setPaxLimit] = useState('');
  // const [lastMinuteEditBooking, setLastMinuteEditBooking] = useState('');
  // const [lastMinuteEditBookingFree, setLastMinuteEditBookingFree] = useState('');


  const handleDayClick = (day) => {
    if(!daysOfActivity.includes(day+" ")){
      if(daysOfActivity.includes("Everyday")){
        setDaysOfActivity([day+" "]);
      }
      else{
        setDaysOfActivity([...daysOfActivity, day+" "]);
      }
    }
    if(daysOfActivity.length ===6){
      setDaysOfActivity(["Everyday"]);
    }
  };

  return (
    <>
      <div className="availabiltyScreen">
        <div className="guideFormTitle">Availability</div>
        <div className="availablityDiv">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="typeOfAct"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>

          <div className="timingDiv">
            <div className="timingDivTop">
              <div className="timingTopLeft">Start Time</div>
              <div className="timingTopRight">End Time</div>
            </div>
            <div className="timingDivBottom">
              <input onChange={(e)=>{setStartTime(e.target.value)}} placeholder="Start Time" className="startTime" />
              <input onChange={(e)=>{setStartAt(e.target.value)}} placeholder="AM" className="startAt" />
              <input onChange={(e)=>{setEndTime(e.target.value)}} placeholder="End Time" className="endTime" />
              <input onChange={(e)=>{setEndAt(e.target.value)}} placeholder="PM" className="endAt" />
            </div>
          </div>
          <div className="guideFormTitle">Days of activity</div>
          <div
            placeholder=""
            className="typeOfAct"
          >
            {
              daysOfActivity.map((day, index) => (
                <div key={index}>{day}</div>
              ))
            }
          </div>
          <div className="daysOfActivity">Other</div>
 <div className="daysDiv">
            <div
              className={`day ${daysOfActivity.includes("Monday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Monday')}
            >
              M
            </div>
            <div
              className={`day ${daysOfActivity.includes("Tuesday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Tuesday')}
            >
              T
            </div>
            <div
              className={`day ${daysOfActivity.includes("Wednesday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Wednesday')}
            >
              W
            </div>
            <div
              className={`day ${daysOfActivity.includes("Thursday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Thursday')}
            >
              T
            </div>
            <div
              className={`day ${daysOfActivity.includes("Friday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Friday')}
            >
              F
            </div>
            <div
              className={`day ${daysOfActivity.includes("Saturday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Saturday')}
            >
              S
            </div>
            <div
              className={`day ${daysOfActivity.includes("Sunday ") ? "selected" : ""}`}
              onClick={() => handleDayClick('Sunday')}
            >
              S
            </div>
          </div>
          <input onChange={(e)=>{setPaxLimit(e.target.value)}} placeholder="Pax Limit" className="typeOfAct" />
          <div className="daysOfActivity">Last minute bookings</div>
          <select
            value={isAllBookingsAllowed}
            onChange={(e) => setIsAllBookingsAllowed(e.target.value)}
            className="typeOfAct"
          >
            <option value="">All bookings allowed?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="daysOfActivity">
            Last minute edit booking (Free only)
          </div>
          <select
            value={isPrior3hBookingAllowed}
            onChange={(e) => setIsPrior3hBookingAllowed(e.target.value)}
            className="typeOfAct"
          >
            <option value="">Prior 3h booking allowed?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Availability;
