import "../styles/SubHeader.css";

export default function SubHeader() {
  return (
    <>
      <div className="sub-header">
        <div className="tringel-shape" />
        <div className="sub-header-text">
          <p className="sub-header-text-welcome">Welcome to our website!</p>
          <p className="sub-header-text-paragraph">
            we have a new design that's fresh, modern and easy to use.
          </p>
        </div>
      </div>
    </>
  );
}
