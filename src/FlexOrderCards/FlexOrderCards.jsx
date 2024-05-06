import React, { useState } from 'react';
import './FlexOrderCards.css';

const FlexOrderorderCards = () => {
  const [order, setOrder] = useState([0, -1, 0, -2]);

  const handleClick = (index) => {
    const newOrder = [...order];
    newOrder[index] = order.length - index; // Change the order on click
    setOrder(newOrder);
  };

  return (
    <div className='FlexOrderorderCards'>
      <div className='cardFlex'>1</div>
      <div style={{order: 0}} className='cardFlex'>2</div>
      <div className='cardFlex'>3</div>
      <div style={{order: 0}} className='cardFlex'>4</div>
      <div className='cardFlex'>5</div>
      <div className='cardFlex'>6</div>
      <div style={{order:0}} className='cardFlex'>7</div>
      <div className='cardFlex'>8</div>
    </div>
  );
};

export default FlexOrderorderCards;
