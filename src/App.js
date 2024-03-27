import "./App.css";
import Home from "./HomePage/Home";
import DetailsPage from "./DetailsPage/Details";
import { Routes, Route } from "react-router-dom";
import Footer from "./SharedComponent/Footer/Footer";
import Header from "./SharedComponent/Header/Header";
import Favourit from "./SharedComponent/Favourite/Favourite";
import { DarkModeProvider } from "../src/SharedComponent/Header/DarkModeButton";
import { FavouriteProvider } from "../src/SharedComponent/FavouriteContext";

function App() {
  return (
    <DarkModeProvider>
      <FavouriteProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="details" element={<DetailsPage />}>
              {" "}
            </Route>
          </Routes>
          <Footer />
          <Favourit />
        </div>
      </FavouriteProvider>
    </DarkModeProvider>
  );
}

export default App;
