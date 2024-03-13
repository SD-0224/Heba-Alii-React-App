import React from "react";
import "../styles/Rating.css";

function RatingStars({ numStars }) {
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(
      <span
        key={i}
        className={`star${i < numStars - 1 ? "" : "-not-checked"}`}
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default RatingStars;
