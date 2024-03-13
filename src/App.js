import "./App.css";
import Home from "./HomePage/Home";
import DetailsPage from "./DetailsPage/Details";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Favourit from "./HomePage/Favourite";

function App() {
  return (
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
  );
}

export default App;
