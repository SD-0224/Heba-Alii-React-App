import MainHome from "./MainHome/MainHome";
import LayoutContainer from "../Container/Container";
export default function Home() {
  return (
    <>
      <main>
        <div className="body-container">
          <LayoutContainer>
            <MainHome />
          </LayoutContainer>
        </div>
      </main>
    </>
  );
}
