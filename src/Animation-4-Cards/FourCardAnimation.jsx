import React, { useEffect, useState } from "react";
import "./FourCardAnimation.css";

const FourCardAnimation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="FourCardAnimationMain">
      <div className={`card card1 ${animate ? 'final' : ''}`}></div>
      <div className={`card card2 ${animate ? 'final' : ''}`}></div>
      <div className={`card card3 ${animate ? 'final' : ''}`}></div>
      <div className={`card card4 ${animate ? 'final' : ''}`}></div>
    </div>
  );
};

export default FourCardAnimation;
