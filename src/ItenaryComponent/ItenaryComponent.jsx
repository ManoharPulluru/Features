import React, { useState } from 'react';
import './ItenaryComponent.css';
import data from './data.json';
import Itenary from '../Itenary/Itenary';

const ItenaryComponent = () => {
  const formatTime = (hour, minute, ampm) => {
    let formattedHour = parseInt(hour, 10);
    if (ampm === 'PM' && formattedHour !== 12) {
      formattedHour += 12;
    } else if (ampm === 'AM' && formattedHour === 12) {
      formattedHour = 0;
    }
    return formattedHour * 60 + parseInt(minute, 10);
  };

  // Grouping data by event date
  const groupedData = data.reduce((acc, curr) => {
    const key = `${curr.eventYear}-${curr.eventMonth}-${curr.eventDate}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});

  // Sorting events within each group based on time
  for (let key in groupedData) {
    groupedData[key].sort((a, b) => {
      const timeA = formatTime(a.eventTimeHr, a.eventTimeMin, a.eventTimeAmPm);
      const timeB = formatTime(b.eventTimeHr, b.eventTimeMin, b.eventTimeAmPm);
      return timeA - timeB;
    });
  }

  const [selectedDate, setSelectedDate] = useState(Object.keys(groupedData)[0]); // Set the default selected date to the first date

  const handleButtonClick = (dateKey) => {
    setSelectedDate(dateKey);
  };

  const displayedDays = Object.keys(groupedData).slice(0, 5);

  return (
    <div className='ItenaryComponentMain'>
      <div className='dateButtons'>
        {displayedDays.map((dateKey, index) => (
          <div
          // id='dateButton'
            key={dateKey}
            onClick={() => handleButtonClick(dateKey)}
            className={dateKey === selectedDate ? 'active dateButton' : 'dateButton'}
          >
            {`Day ${index + 1}`}
          </div>
        ))}
      </div>
      <div className='eventBoxParent' style={{ display: 'flex', flexDirection: 'column' }}>
        {groupedData[selectedDate].map((item, index) => (
          <div
            className='eventBox'
            style={{
              display: 'flex',
            }}
            key={item.id}
          >
            <div className='linesDiv'>
              <div className='smallLine1'></div>
              <div className='bigLine'>
                <div className='bigLineContent'>
                {item.eventTimeHr}:{item.eventMonth}
                <div>{item.eventTimeAmPm}</div>
                </div>
              </div>
              <div className='smallLine'></div>
            </div>
            <div className='eventCardItenary'>
              <Itenary item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItenaryComponent;
