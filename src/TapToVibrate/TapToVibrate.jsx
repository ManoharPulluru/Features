import React from 'react';
import './TapToVibrate.css';

const TapToVibrate = () => {
  const handleTap = () => {
    // Check if the browser supports vibration
    if (navigator.vibrate) {
      navigator.vibrate(20); // Vibrate for 200 milliseconds
    } else {
      console.log('Vibration API is not supported by this browser.');
    }
  };

  return (
    <div className="vibrate-container" onClick={handleTap}>
      Tap me to vibrate!
    </div>
  );
};

export default TapToVibrate;
