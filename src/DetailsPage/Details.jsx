import React, { useEffect, useState, useContext } from "react";
import styles from "../DetailsPage/Details.module.css";
import DetailsBox from "./DetailBox/DetailsBox";
import { useSearchParams } from "react-router-dom";
import SubTopicsBox from "./SubTopicBox/SubTopicBox";
import { useFavouriteContext } from "../SharedComponent/FavouriteContext";
import { AsideBox } from "./AsideBox/AsideBox";

function DetailsPage() {
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  const [cardData, setCardData] = useState({});
  const [subtopicsData, setSubtopicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favouriteCards, setFavouriteCards } = useFavouriteContext();

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
      } finally {
        setLoading(false);
      }
    }

    fetchTopicDetails(id);

    return () => {};
  }, [id]);

  const isFavourite = favouriteCards.some((elm) => elm.id === cardData.id);

  const handleAddRemoveFavorite = () => {
    if (isFavourite) {
      const updatedCards = favouriteCards.filter(
        (elm) => elm.id !== cardData.id
      );
      setFavouriteCards(updatedCards);
      localStorage.setItem("MyFavourite", JSON.stringify(updatedCards));
    } else {
      const updatedCards = favouriteCards.concat(cardData);
      setFavouriteCards(updatedCards);
      localStorage.setItem("MyFavourite", JSON.stringify(updatedCards));
    }
  };

  return (
    <>
      {loading ? (
        <div id="loading_indicator"></div>
      ) : (
        <div className={styles.main}>
          <DetailsBox cardData={cardData} />
          <AsideBox
            cardData={cardData}
            id="remove-button"
            onClick={handleAddRemoveFavorite}
            label={isFavourite ? "Remove from Favorites" : "Add to Favorites"}
          />
          <SubTopicsBox topic={cardData.topic} subtopicsData={subtopicsData} />
        </div>
      )}
    </>
  );
}

export default DetailsPage;
