import SubHeader from "../Header/SubHeader/SubHeader";
import styles from "../Header/Header.module.css";
import LayoutContainer from "../../Container/Container";
import Buttons from "../../Buttons";
import { useDarkMode } from "../Header/DarkModeButton";
import { useFavouriteContext } from "../FavouriteContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { toggleFavouriteVisibility } = useFavouriteContext();

  return (
    <>
      <header className={styles.HederRaber}>
        <LayoutContainer>
          <nav className={styles.HederNavigator}>
            <h4 className={styles.WebTobics}>Web Topics</h4>
            <div className={styles.HederButtonsContainer}>
              <Buttons
                icon={"moon-outline"}
                label={isDarkMode ? " Light Mode" : " Dark Mode"}
                onClick={toggleDarkMode}
              ></Buttons>
              <Buttons
                icon={"heart-outline"}
                label={"Favourit"}
                onClick={toggleFavouriteVisibility}
              ></Buttons>
            </div>
          </nav>
        </LayoutContainer>
        <SubHeader />
      </header>
    </>
  );
}
