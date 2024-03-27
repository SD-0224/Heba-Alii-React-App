import React, { createContext, useContext, useState, useEffect } from "react";

const FavouriteContext = createContext();

export const useFavouriteContext = () => useContext(FavouriteContext);

export const FavouriteProvider = ({ children }) => {
  const [isFavouriteVisible, setIsFavouriteVisible] = useState(false);
  const [favouriteCards, setFavouriteCards] = useState([]);

  // console.log("favouriteCards", favouriteCards);
  useEffect(() => {
    const storgeCards = localStorage.getItem("MyFavourite");
    if (!storgeCards) {
      localStorage.setItem("MyFavourite", JSON.stringify([]));
    } else {
      setFavouriteCards(JSON.parse(storgeCards));
    }
  }, []);

  const toggleFavouriteVisibility = () => {
    setIsFavouriteVisible((prev) => !prev);
  };

  return (
    <FavouriteContext.Provider
      value={{
        isFavouriteVisible,
        toggleFavouriteVisibility,
        favouriteCards,
        setFavouriteCards,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

//define function remove from favourite
//recive carddata.id from details
//define function addtofavourite
//recive carddata from details
//i need to put the localstorege here
//localStorage.setItem("MyFavourite", JSON.stringify(updatedCards));
//for the remove and the add
