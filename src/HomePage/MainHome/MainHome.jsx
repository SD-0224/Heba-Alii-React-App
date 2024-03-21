import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../Search";
import AddCourses from "../AddingCourses/Courses";
import DropeDown from "../DropDown/DropDown";
import styles from "../MainHome/MainHome.module.css";

export default function MainHome() {
  const [contentData, setContentData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const debouncedHandleSearch = useRef(null);

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
    return () => {};
  }, []);

  //Debounce
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  //search input
  useEffect(() => {
    debouncedHandleSearch.current = debounce(() => {
      fetch(
        `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInputValue}`
      )
        .then((response) => response.json())
        .then((result) => {
          setContentData(result);
        });
    }, 300);
  }, [searchInputValue]);

  //sort function
  const sortBy = (value) => {
    console.log("value", value);
    let sortedData = [...contentData];
    console.log(sortedData);
    switch (value) {
      case "Topic":
        sortedData.sort((a, b) => a.topic.localeCompare(b.topic));
        break;
      case "Author":
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setContentData(sortedData);
    console.log("sortedData", sortedData);
  };

  //filtter
  const filterBy = (filtterValue) => {
    console.log("filtterValue", filtterValue);
    let filteredData = [...contentData];
    if (filtterValue) {
      // If a category is selected, filter the data based on the selected category
      filteredData = filteredData.filter(
        (course) => course.category === filtterValue
      );
    }
    setContentData(filteredData);
  };

  function searchInputChange(event) {
    setSearchInputValue(event.target.value);
    debouncedHandleSearch.current();
  }

  const handleSortChange = (event) => {
    const value = event.target.value;
    // setSortSelectValue(value);
    console.log(value);
    sortBy(value);
  };
  const handleFilterChange = (event) => {
    const filtterValue = event.target.value;
    // console.log("setFilterSelectValue", filterSelectValue);
    filterBy(filtterValue);
  };

  return (
    <>
      <div className={styles.SearchBar}>
        <div className={styles.SearchInput}>
          <span className={styles.ModeIconSearch} />
          <input
            className={styles.SearchBox}
            type="text"
            id="search-input"
            placeholder="Search the website.."
            name="search"
            value={searchInputValue}
            onChange={searchInputChange}
          />
        </div>
        <div className={styles.SearchBoxButtons}>
          <DropeDown
            classes={{ container: "SortSelect", pointer: "SortPointer" }}
            label={"Sort by"}
            id={"sort"}
            options={["Default", "Topic", "Author"]}
            onChange={handleSortChange}
          />
          <DropeDown
            classes={{ container: "FilterSelect", pointer: "FilterPointer" }}
            label={"Filter by:"}
            id={"filter"}
            options={[
              "Default",
              "Web Development Languages",
              "Frontend Frameworks and Libraries",
              "Backend Frameworks and Libraries",
              "Databases and APIs",
              "Web Development Concepts and Technologies",
            ]}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      {/* <SearchBar onInputChange={searchInputChange} /> */}
      <AddCourses contentData={contentData} />
    </>
  );
}
