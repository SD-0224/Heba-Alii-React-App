import DarkeMode from "./DarkModeButton";
import FavouriteButton from "./FavouriteButton";
import SubHeader from "./SubHeader";
import "../styles/Header.css";
// import Favourit from "../HomePage/Favourite";

export default function Header(isDarkMode) {
  return (
    <>
      <header className="head-raber">
        <nav className="header-navigater">
          <h4 className="web-tobics container">Web Topics</h4>
          <div className="header-buttons-container container">
            <DarkeMode />

            <FavouriteButton />
          </div>
        </nav>
        <SubHeader />
      </header>
    </>
  );
}
