import React, { useEffect, useState } from "react";
import styles from "../DetailsPage/Details.module.css";
import DetailsBox from "./DetailBox/DetailsBox";
// import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import SubTopicsBox from "./SubTopicBox/SubTopicBox";

function DetailsPage() {
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  const [cardData, setCardData] = useState({});
  const [subtopicsData, setSubtopicsData] = useState([]);

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
      } catch (error) {
        console.error("Error fetching topic details:", error);
      }
    }

    fetchTopicDetails(id);

    return () => {};
  }, [id]);

  return (
    <>
      <div className={styles.main}>
        <DetailsBox cardData={cardData} />
        <div className={styles.AsideBoxRaber}>
          <div className={styles.AsideBox}>
            <img
              src={`./logos/${cardData.image}`}
              // src={require(`../assets/logos/${cardData.image}`)}
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
