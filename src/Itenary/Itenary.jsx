import React, { useState, useRef, useEffect } from 'react';
import './Itenary.css';

const Itenary = ({ item }) => {
  // console.log(item, 'item');
  const [isPopupClicked, setIsPopupClicked] = useState(null);
  const [isSwipped, setIsSwipped] = useState(null);
  const cardRef = useRef(null);
  const [startY, setStartY] = useState(null);
  const [flag, setFlag] = useState(false);
  const [is1Hr, setIs1hr] = useState(false);

  const eventTime = parseInt(item.eventTimeHr) + (item.eventTimeAmPm === 'PM' ? 12 : 0);
  const endTime = parseInt(item.endTimeHr) + (item.endTimeAmPm === 'PM' ? 12 : 0);

  useEffect(() => {
    if (endTime - eventTime > 1 || endTime - eventTime < 0) {
      setIs1hr(true);
    }
    const handleTouchMove = (event) => {
      if (startY !== null) {
        const deltaY = event.touches[0].clientY - startY;

        if (deltaY > 50) {
          moveDown();
        } else if (deltaY < -50) {
          moveUp();
        }
      }
    };

    const handleTouchStart = (event) => {
      setStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      setStartY(null);
    };

    const moveUp = () => {
      if (flag === false) {
        setFlag(true);
        setIsSwipped(true);
        // console.log('Moving up', isSwipped);
        setTimeout(() => {
          setIsSwipped(null);
          setFlag(false);
        }, 2000);
      }
    };

    const moveDown = () => {
      if (flag === false) {
        setFlag(true);
        setIsSwipped(false);
        setTimeout(() => {
          setIsSwipped(null);
          setFlag(false);
        }, 2000);
      }
    };

    const cardElement = cardRef.current;
    cardElement.addEventListener('touchstart', handleTouchStart);
    cardElement.addEventListener('touchmove', handleTouchMove);
    cardElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      cardElement.removeEventListener('touchstart', handleTouchStart);
      cardElement.removeEventListener('touchmove', handleTouchMove);
      cardElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, isSwipped]);

  return (
    <div className='ItenaryMain'>
      <div className='CardBox'>
        <div className='Popup'></div>
        <div
          className={isSwipped !== null ? (isSwipped ? 'Card MovedUp' : 'Card MovedDown') : 'Card'}
          style={{
            background: `linear-gradient(90deg, rgba(0, 0, 0, 0.00) 34.01%, rgba(0, 0, 0, 0.80) 66.89%),
                        linear-gradient(270deg, rgba(0, 0, 0, 0.00) 49.17%, rgba(0, 0, 0, 0.60) 92.4%),
                        linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),
                        lightgray`,
            backgroundPosition: '0px -19.36px',
            backgroundSize: 'fit-content',
            backgroundRepeat: 'no-repeat',
          }}
          ref={cardRef}
        >
          <div className='bgGradientDiv'></div>
          <img src={item.image} className='bgImageItenary' />
          <div className='hourStatus'>{is1Hr ? '< 1 hour' : '> 1 hour'}</div>
          <div className='eventNameDiv'>
            {/* {item.eventTitle} */}
            {item.eventTitle.length > 15 ? item.eventTitle.substring(0, 15) + '...' : item.eventTitle}
            </div>
          <div className='eventDescriptionDiv'>{
            item.eventDescription.length > 100 ? item.eventDescription.substring(0, 100) + '...' : item.eventDescription
          }</div>
          <div className='eventTimeDiv'>
            Open Till {item.endTimeHr}:
            {item.endTimeMin} 
            {item.endTimeAmPm}
          </div>
        </div>
        {/* <div className='Popup2'></div> */}
      </div>
    </div>
  );
};

export default Itenary;
