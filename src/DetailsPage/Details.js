import React, { useEffect, useState } from "react";
import RatingStars from "../HomePage/Rating";
import "../styles/Details.css";
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
      <div className="main">
        <div className="details-box">
          <div className="details-content container-details">
            <p className="category">{cardData.category}</p>
            <h1 className="topic">{cardData.topic}</h1>
            <div className="rating">
              <RatingStars numStars={5} />
            </div>
            <p className="description">{cardData.description}</p>
          </div>
        </div>
        <div className="aside-boxraber">
          <div className="aside-box">
            <img src={`./logos/${cardData.image}`} className="details-image" />
            <p className="auother">
              by: <span className="bolded">{cardData.name}</span>
            </p>
            <div className="aside-small-box">
              <p className="intrested-pag">Intrested about this topic?</p>
              <button
                className="add-to-favorites"
                // onClick={() => addRemoveFavourite(cardData)}
              >
                ADD To Favourite
              </button>
              <p className="unlimited-parag">Unlimited Credits</p>
            </div>
          </div>
        </div>
        <SubTopicsBox topic={cardData.topic} subtopicsData={subtopicsData} />
      </div>
    </>
  );
}

export default DetailsPage;
