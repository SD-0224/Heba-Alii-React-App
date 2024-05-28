import React, { useState, useEffect } from "react";
import AddCourses from "../AddingCourses/Courses";
import DropeDown from "../DropDown/DropDown";
import styles from "../MainHome/MainHome.module.css";
import SearchInput from "../SearchInput/SearchInput";

export default function MainHome() {
  const [contentData, setContentData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [loading, setLoading] = useState(true);

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
      } finally {
        // Hide loading indicator after fetching data
        setLoading(false);
      }
    };
    fetchData();
    return () => {};
  }, []);

  //debounce
  // function debounce(func, delay) {
  //   let timeoutId;
  //   return function () {
  //     const context = this;
  //     const args = arguments;

  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       func.apply(context, args);
  //     }, delay);
  //   };
  // }

  //search input
  useEffect(() => {
    const ApiSearch = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInputValue}`;

    const fetchDataAsync = async () => {
      try {
        const response = await fetch(ApiSearch);
        const result = await response.json();
        setContentData(result);
      } catch (error) {
        console.log("Something went wrong. Web topics failed to load.");
      }
    };
    const debounce = setTimeout(fetchDataAsync, 300);
    return () => clearTimeout(debounce);
  }, [searchInputValue]);

  const handleInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

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

  const handleSortChange = (event) => {
    const value = event.target.value;
    // setSortSelectValue(value);
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
        <SearchInput
          className={styles.SearchBox}
          type="text"
          id="search-input"
          placeholder="Search the website.."
          name="search"
          value={searchInputValue}
          onChange={handleInputChange}
        />

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
      <h2>"24" Web Topics Found</h2>

      {loading ? (
        <div id="loading_indicator"></div>
      ) : (
        <AddCourses contentData={contentData} />
      )}
    </>
  );
}
