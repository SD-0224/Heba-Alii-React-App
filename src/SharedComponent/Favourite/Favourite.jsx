import RatingStars from "../Ratings/Rating";
import React from "react";
import { useFavouriteContext } from "../FavouriteContext";
import styles from "./Favourite.module.css";

export default function Favourite() {
  const { isFavouriteVisible, favouriteCards } = useFavouriteContext();

  // const allFaveCards = JSON.parse(localStorage.getItem("MyFavourite")) || [];

  return (
    <>
      {isFavouriteVisible && (
        <div id="favourit" className={styles.FavouritSection}>
          <p className={styles.FavouritSectionParagraph}>My Favourite Topics</p>
          <div className={styles.FavouritCourses}>
            {favouriteCards.map((favorite, index) => (
              <div
                key={index}
                className={styles.FaviouritCourse}
                id={`id-${favorite.id}`}
              >
                <img
                  className={styles.FaviouritCourseImg}
                  src={require(`../../assets/logos/${favorite.image}`)}
                  alt={favorite.topic}
                />
                <h1 className={styles.CourseTitle}>{favorite.topic}</h1>
                <div className={styles.FavRating}>
                  <RatingStars numStars={5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// import RatingStars from "../Ratings/Rating";
// import styles from "../Favourite/Favourite.module.css";
// import React, { useState } from "react";

// export default function Favourit() {
//   // console.log("hey heba ");
//   const [favouriteVisible, setFavouriteVisible] = useState(false);
//   const allFaveCards = JSON.parse(localStorage.getItem("MyFavourite")) || [];
//   // console.log("allFaveCards", allFaveCards);

//   const toggleFavourite = () => {
//     setFavouriteVisible(!favouriteVisible);
//   };

//   return (
//     <>
//       {/* <button id="headerButtons" onClick={toggleFavourite}>
//         Favourite
//       </button> */}
//       <div id="favourit" className={styles.FavouritSection}>
//         <p className={styles.FavouritSectionParagraph}>My Favourit Topics</p>
//         <div className={styles.FavouritCourses}></div>
//       </div>
//       {/* {favouriteVisible && (
//         <div className="favourite-container">
//           {allFaveCards.map((card) => (
//             <div key={card.id} className="favourite-course">
//               <img
//                 className="favourite-course-img"
//                 src={`./logos/${card.image}`}
//                 alt={card.topic}
//               />
//               <h1 className="course-title">{card.topic}</h1>
//               <div className="rating">
//                 <RatingStars numStars={5} />
//               </div>
//             </div>
//           ))}
//         </div>
//       )} */}
//     </>
//   );
// }

//
//
//
//
//
//
// import React, { createContext, useContext, useState } from "react";

// // Step 1: Create a Context
// const FavouriteContext = createContext();

// // Step 2: Create a Provider Component
// function FavouriteProvider({ children }) {
//   const [favouriteVisible, setFavouriteVisible] = useState(false);
//   const [favouriteCards, setFavouriteCards] = useState([]);

//   const loadFavouriteCards = () => {
//     const allFaveCards = JSON.parse(localStorage.getItem("MyFavourite")) || [];
//     setFavouriteCards(allFaveCards);
//   };

//   const toggleFavouriteVisibility = () => {
//     setFavouriteVisible(!favouriteVisible);
//     if (!favouriteVisible) {
//       loadFavouriteCards();
//     }
//   };

//   return (
//     <FavouriteContext.Provider
//       value={{ favouriteVisible, favouriteCards, toggleFavouriteVisibility }}
//     >
//       {children}
//     </FavouriteContext.Provider>
//   );
// }

// // FavouriteSection component
// function FavouriteSection() {
//   const { favouriteVisible, favouriteCards } = useContext(FavouriteContext);

//   return (
//     <div>
//       {favouriteVisible && (
//         <div id="favourit">
//           {favouriteCards.map((card) => (
//             <div className="container favourite-course" key={card.id}>
//               <img
//                 className="favourite-course-img"
//                 src={`./logos/${card.image}`}
//                 alt={card.topic}
//               />
//               <h1 className="course-title">{card.topic}</h1>
//               <div className="rating">
//                 {/* Assuming createRatingStars function is defined elsewhere */}
//                 {/* createRatingStars(favouriteRatings, 5) */}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

//export { FavouriteProvider, FavouriteSection, FavouriteContext };
