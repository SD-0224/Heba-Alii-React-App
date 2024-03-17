import DarkeMode from "./DarkModeButton";
import FavouriteButton from "./FavouriteButton";
import SubHeader from "./SubHeader";
import styles from "../Header/Header.module.css";
import LayoutContainer from "../../Container/Container";
import Buttons from "../../Buttons";
// import Favourit from "../HomePage/Favourite";

export default function Header(isDarkMode) {
  return (
    <>
      <header className={styles.HederRaber}>
        <LayoutContainer>
          <nav className={styles.HederNavigator}>
            <h4 className={styles.WebTobics}>Web Topics</h4>
            <div className={styles.HederButtonsContainer}>
              <Buttons icon={"moon-outline"} label={"Dark Mode"}></Buttons>
              <Buttons
                icon={"heart-outline"}
                label={"Favourit"}
                onClick={() => console.log("clicked")}
              ></Buttons>

              {/* <button
                // id="toggle-button"
                className="header-buttons"
                // onClick={toggleDarkMode}
              >
                <ion-icon name="moon-outline"></ion-icon>
                DarkMode
              </button>
              <button
                // id="toggle-button"
                className="header-buttons"
                // onClick={toggleDarkMode}
              >
                <ion-icon name="heart-outline"></ion-icon>
                DarkMode
              </button> */}

              {/* <DarkeMode />
              <FavouriteButton /> */}
            </div>
          </nav>
        </LayoutContainer>

        <SubHeader />
      </header>
    </>
  );
}
// <div className="header-buttons-container container">
