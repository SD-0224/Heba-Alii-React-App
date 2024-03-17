import React, { useEffect, useState } from "react";
import RatingStars from "../Ratings/Rating";
import styles from "../DetailsPage/Details.module.css";
// import { useParams } from "react-router";
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter,
} from "react-router-dom";
import SubTopicsBox from "./SubTopicBox";

function DetailsPage() {
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  // console.log("id", id);
  const [cardData, setCardData] = useState({});
  const [subtopicsData, setSubtopicsData] = useState([]);
  // console.log("heba hi");

  useEffect(() => {
    async function fetchTopicDetails(id) {
      try {
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${id}`
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong. Web topic details failed to load."
          );
        }
        const data = await response.json();
        setSubtopicsData(data.subtopics);
        setCardData(data);
        // console.log("cardData", data);
      } catch (error) {
        console.error("Error fetching topic details:", error);
      }
    }

    fetchTopicDetails(id);

    // console.log("data", cardData);
    // Cleanup function
    return () => {};
  }, [id]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.DetailsBox}>
          <div
            className={`${styles.DetailsContent} ${styles.ContainerDetails}`}
          >
            {/* <div className="details-content container-details"> */}
            <p className={styles.Category}>{cardData.category}</p>
            <h1 className={styles.Topic}>{cardData.topic}</h1>
            <div className={styles.Rating}>
              <RatingStars numStars={5} />
            </div>
            <p className={styles.Description}>{cardData.description}</p>
          </div>
        </div>
        <div className={styles.AsideBoxRaber}>
          <div className={styles.AsideBox}>
            <img
              src={`../logos/${cardData.image}`}
              className={styles.DetailsImage}
            />
            <p className={styles.Auother}>
              by: <span className={styles.Bolded}>{cardData.name}</span>
            </p>
            <div className={styles.AsideSmallBox}>
              <p className={styles.IntrestedParag}>
                Intrested about this topic?
              </p>
              <button
                className={styles.AddToFavourit}
                // onClick={() => addRemoveFavourite(cardData)}
              >
                ADD To Favourite
              </button>
              <p className={styles.UnlimitedParag}>Unlimited Credits</p>
            </div>
          </div>
        </div>
        <SubTopicsBox topic={cardData.topic} subtopicsData={subtopicsData} />
      </div>
    </>
  );
}

export default DetailsPage;
