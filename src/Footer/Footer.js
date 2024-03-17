import logo from "../Icons/red-heart.svg";
import styles from "../Footer/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <p>Developed with</p>
        <img className={styles.FooterIcon} src={logo} alt="red-heart-icon" />
        <p> © 2024</p>
      </footer>
    </>
  );
}
