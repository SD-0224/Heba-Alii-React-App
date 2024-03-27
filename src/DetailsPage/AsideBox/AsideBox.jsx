import React from "react";
import styles from "../../DetailsPage/AsideBox/AsideBox.module.css";
export function AsideBox({ cardData, id, label, onClick }) {
  return (
    <>
      <div className={styles.AsideBoxRaber}>
        <div className={styles.AsideBox}>
          <img
            src={`./logos/${cardData.image}`}
            // src={require(`../assets/logos/${cardData.image}`)}
            className={styles.DetailsImage}
          />

          <p className={styles.Auother}>
            <span className={styles.AideBoxTopic}>{cardData.topic}</span>
            <span className={styles.Bolded}>{`by: ${cardData.name}`}</span>
          </p>

          <div className={styles.AsideSmallBox}>
            <p className={styles.IntrestedParag}>Intrested about this topic?</p>
            <button className={styles.AddToFavourit} id={id} onClick={onClick}>
              {label}
              {/* {isFavourite ? "Remove from Favorites" : "Add to Favorites"} */}
            </button>

            <p className={styles.UnlimitedParag}>Unlimited Credits</p>
          </div>
        </div>
      </div>
    </>
  );
}
