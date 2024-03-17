import React from "react";
import styles from "../Ratings/Rating.module.css";

function RatingStars({ numStars }) {
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(
      <span
        key={i}
        className={i < numStars - 1 ? styles.Star : styles.StarNotChecked}
      />
    );
  }

  return <div className={styles.Rating}>{stars}</div>;
}

export default RatingStars;
