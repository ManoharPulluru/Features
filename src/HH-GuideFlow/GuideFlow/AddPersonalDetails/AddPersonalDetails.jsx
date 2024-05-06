import React, { useState } from "react";
import "../Guide.css";
import "./AddPersonalDetails.css";

const AddPersonalDetails = ({
  typeOfProvider,
  settypeOfProvider,
  fullname,
  setFullname,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  country,
  setCountry,
}) => {
  const [flag, setFlag] = useState(false);

  const handleOptionClick = (content) => {
    settypeOfProvider(content);
    setFlag(!flag);
  };

  return (
    <>
      <div className="guideFormTitle">Add Personal Details</div>
      <div
        onClick={() => {
          setFlag(!flag);
        }}
        className="guideFullName"
      >
        {!typeOfProvider.length
          ? "What type of provider are you?"
          : typeOfProvider}
      </div>
      <div className={`optionsInDetails ${flag ? "visible" : ""}`}>
        <div
          onClick={() => handleOptionClick("I’m a local without experience")}
          className="guideFullNameOption"
        >
          I’m a local without experience
        </div>
        <div
          onClick={() => handleOptionClick("I’m an expert in showing my city!")}
          className="guideFullNameOption"
        >
          I’m an expert in showing my city!
        </div>
        <div
          onClick={() => handleOptionClick("I’m a professional local guide")}
          className="guideFullNameOption"
        >
          I’m a professional local guide
        </div>
        <div
          onClick={() => handleOptionClick("I have a guiding license")}
          className="guideFullNameOption"
        >
          I have a guiding license
        </div>
      </div>
      <input
        onChange={(e) => setFullname(e.target.value)}
        type="text"
        placeholder="Full Name"
        className="guideFullName"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        className="guideFullName"
      />
      <input
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="text"
        placeholder="Phone Number"
        className="guideFullName"
      />
      <input
        onChange={(e) => setCountry(e.target.value)}
        type="text"
        placeholder="Country"
        className="guideFullName"
      />
    </>
  );
};

export default AddPersonalDetails;
