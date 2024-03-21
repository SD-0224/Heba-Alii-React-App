import React, { useState } from "react";
import RatingStars from "../Ratings/Rating";
import styles from "../Favourite/Favourite.module.css";

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
      <div id="favourit" className={styles.FavouritSection}>
        <p className={styles.FavouritSectionParagraph}>My Favourit Topics</p>
        <div className={styles.FavouritCourses}></div>
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
