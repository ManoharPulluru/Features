// Carousel.jsx
import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import CarouselItem from './CarouselItem';
import towerBg from '../images/towerBg.png';
import earthBg from '../images/EarthBg.png';
import promenadeBg from '../images/PromenadeBg.png';

import './Corousel.css';

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const carouselElement = document.querySelector('.carousel');
    if (carouselItems.length > 0) {
      M.Carousel.init(carouselElement, {});
    }

    return () => {
      const carouselInstance = M.Carousel.getInstance(carouselElement);
      if (carouselInstance) {
        carouselInstance.destroy();
      }
    };
  }, [carouselItems]);

  useEffect(() => {
    // Mock data for testing
    const mockData = [
      { id: 1, imageUrl: towerBg },
      { id: 2, imageUrl: earthBg },
      { id: 3, imageUrl: promenadeBg }
    ];
    setCarouselItems(mockData);
    // Use the fetch API to fetch data from 'https://mias-backup-db.onrender.com/hearhere_events'
    // and setCarouselItems(data.New_York_City); as per your actual data source
  }, []);

  return (
    <div className="carousel">
      {carouselItems.map((item) => (
        <CarouselItem key={item.id} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default Carousel;
