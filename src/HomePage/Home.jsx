import MainHome from "./MainHome/MainHome";
import LayoutContainer from "../Container/Container";
export default function Home() {
  return (
    <>
      <main>
        <div className="body-container">
          <LayoutContainer>
            <h2>"24" Web Topics Found</h2>
            {/* <div id="loading_indicator"> </div> */}
            <MainHome />
          </LayoutContainer>
        </div>
      </main>
    </>
  );
}
