import React, { useState } from "react";
import RatingStars from "./Rating";

import "../styles/Favourite.css";

export default function Favourit() {
  // console.log("hey heba ");
  const [favouriteVisible, setFavouriteVisible] = useState(false);
  const allFaveCards = JSON.parse(localStorage.getItem("MyFavourite")) || [];
  // console.log("allFaveCards", allFaveCards);

  const toggleFavourite = () => {
    setFavouriteVisible(!favouriteVisible);
  };

  return (
    <>
      {/* <button id="headerButtons" onClick={toggleFavourite}>
        Favourite
      </button> */}
      <div id="favourit" className="favourit-section">
        {/* i'm adding here */}
        <p className="favourit-section-paragraph">My Favourit Topics</p>
        <div className="faviourit-courses container"></div>
      </div>
      {/* {favouriteVisible && (
        <div className="favourite-container">
          {allFaveCards.map((card) => (
            <div key={card.id} className="favourite-course">
              <img
                className="favourite-course-img"
                src={`./logos/${card.image}`}
                alt={card.topic}
              />
              <h1 className="course-title">{card.topic}</h1>
              <div className="rating">
                <RatingStars numStars={5} />
              </div>
            </div>
          ))}
        </div>
      )} */}
    </>
  );
}
