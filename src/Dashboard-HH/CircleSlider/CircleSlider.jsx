import React, { useState } from 'react';
import './CircleSlider.css';
import Heart from './images/Heart.svg';
import Ticket from './images/Ticket.svg';
import Calander from './images/Calander.svg';
import MenuIcon from './images/MenuIcon.svg';
import TicketWhite from './images/TicketWhite.svg';
import CalanderWhite from './images/CalanderWhite.svg';
import HeartWhite from './images/HeartWhite.svg';

const CircleSlider = () => {
  const [showBig, setShowBig] = useState(false);
  const [angle, setAngle] = useState(-25);
  const [image1, setImage1] = useState(HeartWhite);
  const [image2, setImage2] = useState(Ticket);
  const [image3, setImage3] = useState(Calander);

  const handleClickOption1 = () => {
    setAngle(-25);
    setTimeout(() => {
      setImage1(HeartWhite);
      setImage3(Calander);
      setImage2(Ticket);
    }, 800);
  };

  const handleClickOption2 = () => {
    setAngle(20);
    setTimeout(() => {
      setImage2(TicketWhite);
      setImage1(Heart);
      setImage3(Calander);
    }, 800);
  };

  const handleClickOption3 = () => {
    setAngle(70);
    setTimeout(() => {
      setImage3(CalanderWhite);
      setImage1(Heart);
      setImage2(Ticket);
    }, 800);
  };

  return (
    <div className='circleSliderMain'>
      <div
        onClick={() => {
          setShowBig(!showBig);
        }}
        className={'smallCircle' + (!showBig ? ' smallCircleActive' : '')}
      >
        <img src={MenuIcon} />
      </div>
      <div
        onClick={() => {
          setTimeout(() => {
            setShowBig(!showBig);
          }, 1200);
        }}
        style={{ transform: !showBig ? 'translate(-80%, 80%)' : 'translate(-37%, 5%)' }}
        className='bigCircle'
      >
        <div style={{ transform: `rotate(${angle}deg)` }} className='pie-chart'></div>
        <div onClick={handleClickOption1} className='Option1Clider'>
          <img src={image1} />
        </div>
        <div onClick={handleClickOption2} className='Option2Clider'>
          <img src={image2} />
        </div>
        <div onClick={handleClickOption3} className='Option3Clider'>
          <img src={image3} />
        </div>
      </div>
    </div>
  );
};

export default CircleSlider;
