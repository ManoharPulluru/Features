import React from 'react';
import './App.css';
import MobileFit from './MobileFit';
import SeatArrangement from './SeatArrangement/SeatArrangement';
import ColorSelector from './ColorSelector/ColorSelector';
import LiveCoCordinates from './LiveCo-ordinates/LiveCoCordinates';
// import Guide from "./HearHereUpdated/GuideFlow/Guide";
import Guide from './HH-GuideFlow/GuideFlow/Guide';
import Itenary from './Itenary/Itenary';
import FourCardAnimation from './Animation-4-Cards/FourCardAnimation';
import Cameras from './Cameras/Cameras';
import FlexOrderCards from './FlexOrderCards/FlexOrderCards';
import DashBoard from './Dashboard-HH/DashBoard';
import Bubbles from "./bubblesSelection/Bubbles";
import CloudinaryTest from './CloudinaryTest/CloudinaryTest';
import ItenaryComponent from './ItenaryComponent/ItenaryComponent';
import LocationTracker from './LocationFinder/LocationFinder';

const App = () => {
  return (
    <div className='appMain'>
      {/* <CircleAnimation /> */}
      {/* <MobileFit/> */}
      {/* <SeatArrangement/> */}
      {/* <ColorSelector/> */}
      {/* <LiveCoCordinates/> */}
      {/* <Guide/> */}
      {/* <Bubbles/> */}
      {/* <Itenary/> */}
      {/* <FourCardAnimation/> */}
      {/* <Cameras/> */}
      {/* <FlexOrderCards/> */}
      {/* <CloudinaryTest/> */}
      {/* <DashBoard /> */}
      {/* <ItenaryComponent/> */}
      <LocationTracker/>
    </div>
  );
};

export default App;
