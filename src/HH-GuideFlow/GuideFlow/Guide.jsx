import React, { useState } from "react";
import "./Guide.css";
import leftArrow from "../images/LeftArrow.svg";
import AddPersonalDetails from "./AddPersonalDetails/AddPersonalDetails";
import CreateAProduct from "./CreateAProduct/CreateAProduct";
import MeetingPoint from "./MeetingPoint/MeetingPoint";
import Availability from "./Availability/Availability";
import UploadDocuments from "./UploadDocuments/UploadDocuments";
import ProductPricing from "./ProductPricing/ProductPricing";

const Guide = () => {
  const [saveCount, setSaveCount] = useState(0);

  // AddPersonalDetails

  const [typeOfProvider, settypeOfProvider] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  // CreateProductData

  const [productFullName, setProductFullName] = useState("");
  const [productEmail, setProductEmail] = useState("");
  const [productCountry, setProductCountry] = useState("");
  const [productCity, setProductCity] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [productTags, setProductTags] = useState([]);
  const [productDescription, setProductDescription] = useState("");
  const [tag, setTag] = useState("");

  // console.log(productFullName, productEmail, productCountry, productCity, selectedActivity, selectedDuration, productTags, productDescription, tag)

  // Product Pricing

  const [selectedActivityProduct, setSelectedActivityProduct] = useState("");
  const [pricePerPax, setPricePerPax] = useState("");
  const [minAdults, setMinAdults] = useState("");
  const [maxAdults, setMaxAdults] = useState("");
  const [passengersLimit, setPassengersLimit] = useState("");
  const [allowBooking, setAllowBooking] = useState("");
  const [allowChildren, setAllowChildren] = useState("");

  // console.log(selectedActivityProduct, pricePerPax, minAdults, maxAdults, passengersLimit, allowBooking, allowChildren)

  // MeetingPoint

  const [meetingPointName, setMeetingPointName] = useState("");
  const [pricePerPaxMeeting, setpricePerPaxMeeting] = useState("");
  const [addRecommendations, setAddRecommendations] = useState("");
  const [thingsToNote, setThingsToNote] = useState("");

  // console.log(meetingPointName, pricePerPaxMeeting, addRecommendations, thingsToNote)

  // Availability

  const [language, setLanguage] = useState("");
  const [isAllBookingsAllowed, setIsAllBookingsAllowed] = useState("");
  const [isPrior3hBookingAllowed, setIsPrior3hBookingAllowed] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endAt, setEndAt] = useState("");
  const [daysOfActivity, setDaysOfActivity] = useState([" "]);
  const [paxLimit, setPaxLimit] = useState("");
  const [lastMinuteEditBooking, setLastMinuteEditBooking] = useState("");
  const [lastMinuteEditBookingFree, setLastMinuteEditBookingFree] =
    useState("");

  const handleBackClick = () => {
    if (saveCount > 0) {
      setSaveCount(saveCount - 1);
    }
  };
  const handleSaveNextClick = () => {
    setSaveCount(saveCount + 1);
  };

  const renderGuideSection = () => {
    switch (saveCount) {
      case 0:
        return (
          <AddPersonalDetails
            typeOfProvider={typeOfProvider}
            settypeOfProvider={settypeOfProvider}
            fullname={fullname}
            setFullname={setFullname}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            country={country}
            setCountry={setCountry}
          />
        );
      case 1:
        return (
          <CreateAProduct
            productFullName={productFullName}
            setProductFullName={setProductFullName}
            productEmail={productEmail}
            setProductEmail={setProductEmail}
            productCountry={productCountry}
            setProductCountry={setProductCountry}
            productCity={productCity}
            setProductCity={setProductCity}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            productTags={productTags}
            setProductTags={setProductTags}
            productDescription={productDescription}
            setProductDescription={setProductDescription}
            tag={tag}
            setTag={setTag}
          />
        );
      case 2:
        return (
          <ProductPricing
            selectedActivityProduct={selectedActivityProduct}
            setSelectedActivityProduct={setSelectedActivityProduct}
            pricePerPax={pricePerPax}
            setPricePerPax={setPricePerPax}
            minAdults={minAdults}
            setMinAdults={setMinAdults}
            maxAdults={maxAdults}
            setMaxAdults={setMaxAdults}
            passengersLimit={passengersLimit}
            setPassengersLimit={setPassengersLimit}
            allowBooking={allowBooking}
            setAllowBooking={setAllowBooking}
            allowChildren={allowChildren}
            setAllowChildren={setAllowChildren}
          />
        );
      case 3:
        return (
          <MeetingPoint
            meetingPointName={meetingPointName}
            setMeetingPointName={setMeetingPointName}
            pricePerPaxMeeting={pricePerPaxMeeting}
            setpricePerPaxMeeting={setpricePerPaxMeeting}
            addRecommendations={addRecommendations}
            setAddRecommendations={setAddRecommendations}
            thingsToNote={thingsToNote}
            setThingsToNote={setThingsToNote}
          />
        );
      case 4:
        return (
          <Availability
            language={language}
            setLanguage={setLanguage}
            isAllBookingsAllowed={isAllBookingsAllowed}
            setIsAllBookingsAllowed={setIsAllBookingsAllowed}
            isPrior3hBookingAllowed={isPrior3hBookingAllowed}
            setIsPrior3hBookingAllowed={setIsPrior3hBookingAllowed}
            startTime={startTime}
            setStartTime={setStartTime}
            startAt={startAt}
            setStartAt={setStartAt}
            endTime={endTime}
            setEndTime={setEndTime}
            endAt={endAt}
            setEndAt={setEndAt}
            daysOfActivity={daysOfActivity}
            setDaysOfActivity={setDaysOfActivity}
            paxLimit={paxLimit}
            setPaxLimit={setPaxLimit}
            lastMinuteEditBooking={lastMinuteEditBooking}
            setLastMinuteEditBooking={setLastMinuteEditBooking}
            lastMinuteEditBookingFree={lastMinuteEditBookingFree}
            setLastMinuteEditBookingFree={setLastMinuteEditBookingFree}
          />
        );
      case 5:
        return <UploadDocuments />;
      default:
        return null;
    }
  };

  return (
    <div className="GuideMain">
      <div className="titleForm">
        <img onClick={handleBackClick} src={leftArrow} alt="Back" />
        Be a Tour guide Today
      </div>
      <div className="GuideForm">{renderGuideSection()}</div>
      {saveCount === 5 ? (
        <div className="titleSubmitDiv">Save</div>
      ) : (
        <div onClick={handleSaveNextClick} className="titleSubmitDiv">
          Save & Next
        </div>
      )}
    </div>
  );
};

export default Guide;
