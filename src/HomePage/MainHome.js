import React, { useState, useEffect, useRef } from "react";
import RatingStars from "../SharedComponent/Ratings/Rating";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../HomePage/MainHome.module.css";
import SearchBar from "./Search";

export default function MainHome() {
  const [contentData, setContentData] = useState([]);
  // const [searchInputValue, setSearchInputValue] = useState("");
  // const debouncedHandleSearch = useRef(null);
  const navigate = useNavigate();

  const handleClickDEtails = (id) => {
    navigate(`/details?id=${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tap-web-1.herokuapp.com/topics/list"
        );
        if (!response.ok) {
          throw new Error("Something went wrong. Web topics failed to load.");
        }
        const result = await response.json();
        setContentData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      // Perform any cleanup if needed
    };
  }, []);

  // search input
  // useEffect(() => {
  //   debouncedHandleSearch.current = debounce(() => {
  //     fetch(
  //       `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInputValue}`
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setContentData(result);
  //         console.log("result", result);
  //       });
  //   });
  // }, [searchInputValue]);

  //Debounce
  // const debounce = (func, delay) => {
  //   let timeoutId;
  //   return function () {
  //     const context = this;
  //     const args = arguments;

  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       func.apply(context, args);
  //     }, delay);
  //   };
  // };
  // function searchInputChange(event) {
  //   setSearchInputValue(event.target.value);
  //   debouncedHandleSearch.current();
  //   console.log("setSearchInputValue");
  // }

  //sort function
  // const sortBy = (value) => {
  //   let sortedData = [...contentData];

  //   switch (value) {
  //     case "Topic":
  //       sortedData.sort((a, b) => a.topic.localeCompare(b.topic));
  //       break;
  //     case "Author":
  //       sortedData.sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     default:
  //       break;
  //   }
  //   setContentData(sortedData);
  // };

  // const handleSortChange = (event) => {
  //   const value = event.target.value;
  //   // setSortSelectValue(value);
  //   console.log("event", event.target.value);
  //   // console.log("setSortSelectValue", sortSelectValue);
  //   sortBy(value);
  // };

  //filtter
  // const filterBy = (filtterValue) => {
  //   let filteredData = [...contentData];

  //   if (filtterValue) {
  //     // If a category is selected, filter the data based on the selected category
  //     filteredData = filteredData.filter(
  //       (course) => course.category === filtterValue
  //     );
  //   }
  //   setContentData(filteredData);
  // };

  // const handleFilterChange = (event) => {
  //   const filtterValue = event.target.value;
  //   // console.log("setFilterSelectValue", filterSelectValue);
  //   filterBy(filtterValue);
  // };

  const addContent = (result) => {
    return result.map((item) => (
      <div
        key={item.id}
        className={styles.CourseBox}
        onClick={() => handleClickDEtails(item.id)}
      >
        <img
          src={require(`../../public/logos/${item.image}`)}
          className={styles.CoursesImg}
          alt={item.topic}
        />
        <div className={styles.CourseBoxContentContainer}>
          <p className={styles.CategoryContainer}>{item.category}</p>
          <h4 className={styles.TopicContainer}>{item.topic}</h4>
          {/* <h4 className={`topic-${item.id}`}>{item.topic}</h4> */}
          <RatingStars numStars={5} />
          <p className={styles.AutherName}>Author: {item.name}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <SearchBar />
      <div className={styles.CoursesContainer}>{addContent(contentData)}</div>
    </>
  );
}
//<div className="courses-container container">
