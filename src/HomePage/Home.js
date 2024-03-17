import Header from "../Header/Header";
import MainHome from "./MainHome";
import Footer from "../Footer/Footer";
import LayoutContainer from "../Container/Container";
export default function Home() {
  return (
    <>
      <main>
        <div className="body-container">
          <LayoutContainer>
            <h2 className="container ">"24" Web Topics Found</h2>
            {/* <div id="loading_indicator"> </div> */}
            <MainHome />
          </LayoutContainer>
        </div>
      </main>
    </>
  );
}
