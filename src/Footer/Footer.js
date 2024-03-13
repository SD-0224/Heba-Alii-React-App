import logo from "../Icons/red-heart.svg";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>Developed with</p>
        <img className="footer-icon" src={logo} alt="red-heart-icon" />
        <p> © 2024</p>
      </footer>
    </>
  );
}
