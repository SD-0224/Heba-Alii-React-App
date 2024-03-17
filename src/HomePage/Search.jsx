// import { useState, useEffect, useRef } from "react";
// import "../styles/Search.css";
import styles from "../HomePage/Search.module.css";

export default function SearchBar() {
  return (
    <>
      <div className={styles.SearchBar}>
        {/* typo */}
        <div className={styles.SearchInput}>
          <span className={styles.ModeIconSearch} />
          <input
            className={styles.SearchBox}
            type="text"
            id="search-input"
            placeholder="Search the website.."
            name="search"
            // value={searchInputValue}
            // onChange={searchInputChange}
          />
        </div>
        <div className={styles.SearchBoxButtons}>
          {/* {sortBy(sortSelectValue)} */}
          <div className={styles.SortSelect}>
            <label htmlFor="sort">Sort by:</label>
            <select
              name="sort"
              id="sort"
              className={styles.SortPointer}
              //   value={sortSelectValue}
              //   onChange={handleSortChange}
            >
              <option value="defult">Default</option>
              <option value="Topic">Topic Title</option>
              <option value="Author">Author Name</option>
            </select>
          </div>
          <div className={styles.FilterSelect}>
            <label htmlFor="filter">Filter by:</label>
            <select
              name="filter"
              id="filter"
              className={styles.FilterPointer}
              //   value={filterSelectValue}
              //   onChange={handleFilterChange}
            >
              <option value="defult">Default</option>
              <option value="Web Development Languages">
                Web Development Languages
              </option>
              <option value="Frontend Frameworks and Libraries">
                Frontend Frameworks and Libraries
              </option>
              <option value="Backend Frameworks and Libraries">
                Backend Frameworks and Libraries
              </option>
              <option value="Databases and APIs">Databases and APIs</option>
              <option value="Web Development Concepts and Technologies">
                Web Development Concepts and Technologies
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

// function Search({ result }) {
//   const [searcgInputValue, setSearchInputValue] = useState("");
//   const debouncedHandleSearch = useRef(null);

//   useEffect(() => {
//     debouncedHandleSearch.current = debounce(() => {
//       fetch(
//         `https://tap-web-1.herokuapp.com/topics/list?phrase=${searcgInputValue}`
//       )
//         .then((response) => response.json())
//         .then((result) => {
//           //   addContent(result);
//         });
//     });
//   }, [searcgInputValue]);

//   const debounce = (func, delay) => {
//     let timeoutId;
//     return function () {
//       const context = this;
//       const args = arguments;

//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func.apply(context, args);
//       }, delay);
//     };
//   };
//   function searchInputChange(event) {
//     setSearchInputValue(event.target.value);
//     debouncedHandleSearch.current();
//     console.log("setSearchInputValue");
//   }

//   return (
//     <div className="search-bar container">
//       {/* typo */}
//       <div className="searcch-input">
//         <span className="mode-icon-search" />
//         <input
//           className="search-box"
//           type="text"
//           id="search-input"
//           placeholder="Search the website.."
//           name="search"
//           value={searcgInputValue}
//           onChange={searchInputChange}
//         />
//       </div>
//       <div className="search-box-buttons">
//         <div className="sort-select">
//           <label htmlFor="sort">Sort by:</label>
//           <select name="sort" id="sort">
//             <option value="defult">Default</option>
//             <option value="Topic">Topic Title</option>
//             <option value="Author">Author Name</option>
//           </select>
//         </div>
//         <div className="filter-select">
//           <label htmlFor="filter">Filter by:</label>
//           <select name="filter" id="filter">
//             <option value="defult">Default</option>
//             <option value="Web Development Languages">
//               Web Development Languages
//             </option>
//             <option value="Frontend Frameworks and Libraries">
//               Frontend Frameworks and Libraries
//             </option>
//             <option value="Backend Frameworks and Libraries">
//               Backend Frameworks and Libraries
//             </option>
//             <option value="Databases and APIs">Databases and APIs</option>
//             <option value="Web Development Concepts and Technologies">
//               Web Development Concepts and Technologies
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;
