import React from "react";
import "./Corousel.css";
import heart from "../images/heart.svg";

const CarouselItem = ({ imageUrl }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item-img" src={imageUrl} alt="Carousel Item" />
      <div className="addFavoriteOption">
        <div className="heartCircle">
            <img src={heart} alt="heart" />
        </div>
        <div className="favoriteLeft">
            <div className="favoriteTitle">Shopping Centre</div>
            <div className="favoriteTime">11:00am - 6:00pm</div>
        </div>
      </div>
      <div className="carousel-footer">
        <div className="timefrevent">2-3 hours</div>
        <div className="eventTitleFooter">The LINQ Promenade</div>
      </div>
    </div>
  );
};

export default CarouselItem;
