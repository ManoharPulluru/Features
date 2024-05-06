import React, { useState } from "react";
import "../Guide.css";
import UpArrow from "../../images/UpArrow.svg";
import downArrow from "../../images/downArrow.svg";
import "./ProductPricing.css";

const ProductPricing = ({
  selectedActivityProduct,
  setselectedActivityProduct,
  pricePerPax,
  setPricePerPax,
  minAdults,
  setMinAdults,
  maxAdults,
  setMaxAdults,
  passengersLimit,
  setPassengersLimit,
  allowBooking,
  setAllowBooking,
  allowChildren,
  setAllowChildren,
}) => {
  const [isTypeOfActivityClicked, setIsTypeOfActivityClicked] = useState(false);
  const [isLimitOfPassengersClicked, setIsLimitOfPassengersClicked] = useState(false);
  const [isAllowBookingClicked, setIsAllowBookingClicked] = useState(false);
  const [isAllowChildrenClicked, setIsAllowChildrenClicked] = useState(false);

  // const [selectedActivityProduct, setselectedActivityProduct] = useState("");
  // const [pricePerPax, setPricePerPax] = useState("");
  // const [minAdults, setMinAdults] = useState("");
  // const [maxAdults, setMaxAdults] = useState("");
  // const [passengersLimit, setPassengersLimit] = useState("");
  // const [allowBooking, setAllowBooking] = useState("");
  // const [allowChildren, setAllowChildren] = useState("");

  const handleActivityClick = (activity) => {
    setselectedActivityProduct(activity);
    setIsTypeOfActivityClicked(false);
  };

  const handlePassengersLimit = (limit) => {
    setPassengersLimit(limit);
    setIsLimitOfPassengersClicked(false);
  };

  const handleAllowBooking = (option) => {
    setAllowBooking(option);
    setIsAllowBookingClicked(false);
  };

  const handleAllowChildren = (option) => {
    setAllowChildren(option);
    setIsAllowChildrenClicked(false);
  };

  return (
    <>
      <div className="productPricingDiv">
        <div className="guideFormTitle">Product Pricing</div>
        <div className="productPricingData">
          <div
            onClick={() => setIsTypeOfActivityClicked(!isTypeOfActivityClicked)}
            className={`typeOfAct ${selectedActivityProduct === "Free" ? "freeActivity" : ""}`}
          >
            {selectedActivityProduct.length ? selectedActivityProduct : "Type of activity"}
          </div>
          <div className={`activityOptionsProduct ${isTypeOfActivityClicked ? "visible" : ""}`}>
            <div className="activity" onClick={() => handleActivityClick("Paid")}>Paid</div>
            <div className="activity" onClick={() => handleActivityClick("Free")}>Free</div>
          </div>
          <input
            placeholder="Price p/ pax over limit | $"
            className="typeOfAct"
            value={pricePerPax}
            onChange={(e) => setPricePerPax(e.target.value)}
          />
          <div className="adultDetailDiv">Adults required during booking</div>
          <div className="rangeDiv">
            <div className="rangeMinDiv">
              <input placeholder="Min" className="rangeMinInput" value={minAdults} onChange={(e) => setMinAdults(e.target.value)} />
              <div className="upDownIcons">
                <div className="upIcon"><img src={UpArrow} alt="Up Arrow" /></div>
                <div className="downIcon"><img src={downArrow} alt="Down Arrow" /></div>
              </div>
            </div>
            <div className="rangeMaxDiv">
              <input placeholder="Max" className="rangeMaxInput" value={maxAdults} onChange={(e) => setMaxAdults(e.target.value)} />
              <div className="upDownIcons">
                <div className="upIcon"><img src={UpArrow} alt="Up Arrow" /></div>
                <div className="downIcon"><img src={downArrow} alt="Down Arrow" /></div>
              </div>
            </div>
          </div>
          <div onClick={() => setIsLimitOfPassengersClicked(!isLimitOfPassengersClicked)} className={`typeOfAct ${passengersLimit ? "freeActivity" : ""}`}>
            {
              passengersLimit ? passengersLimit : "Limit of passengers for free booking"
            }
          </div>
          <div className={`activityOptionsProduct ${isLimitOfPassengersClicked ? "visible" : ""}`}>
            <div className="activity" onClick={() => handlePassengersLimit("1")}>1</div>
            <div className="activity" onClick={() => handlePassengersLimit("2")}>2</div>
            <div className="activity" onClick={() => handlePassengersLimit("3")}>3</div>
          </div>
          <div onClick={() => setIsAllowBookingClicked(!isAllowBookingClicked)} className="typeOfAct">
           
            {
              allowBooking.length ? allowBooking : "Allow to book and join during the Tour"
            }
          </div>
          <div className={`activityOptionsProduct ${isAllowBookingClicked ? "visible" : ""}`}>
            <div className="activity" onClick={() => handleAllowBooking("Yes")}>Yes</div>
            <div className="activity" onClick={() => handleAllowBooking("No")}>No</div>
          </div>
          <div onClick={() => setIsAllowChildrenClicked(!isAllowChildrenClicked)} className={`typeOfAct ${allowChildren ? "freeActivity" : ""}`}>
             
            {
              allowChildren.length ? allowChildren : "Allowing children in the booking"
            }
          </div>
          <div className={`activityOptionsProduct ${isAllowChildrenClicked ? "visible" : ""}`}>
            <div className="activity" onClick={() => handleAllowChildren("One")}>One</div>
            <div className="activity" onClick={() => handleAllowChildren("Two")}>Two</div>
            <div className="activity" onClick={() => handleAllowChildren("Three")}>Three</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPricing;
