import React, { useState } from "react";
import "./CircleAnimation.css"; // Import your CSS file

const CircleAnimation = () => {
  const [angle, setAngle] = useState(0);
  const [showXBox, setShowXBox] = useState(false);

  const handleClick = (clickedAngle) => {
    setAngle(clickedAngle);
  };

  return (
    <div className="MainAnimation">
      {showXBox ? (
        <>
          <div className="x-box">
            <div className="num1" onClick={() => handleClick(0)}>
              1
            </div>
            <div className="num2" onClick={() => handleClick(30)}>
              2
            </div>
            <div className="num3" onClick={() => handleClick(60)}>
              3
            </div>
          </div>
          <div
            style={{ transform: `rotate(${angle}deg)` }}
            className="x-box1"
          ></div>
        </>
      ) : null}

      <div
        onClick={() => {
          setShowXBox(!showXBox);
        }}
        className="circle"
      ></div>
    </div>
  );
};

export default CircleAnimation;
