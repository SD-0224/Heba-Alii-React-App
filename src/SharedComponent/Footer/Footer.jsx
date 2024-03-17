// import logo from "//Icons/red-heart.svg";
import styles from "../Footer/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <p className={styles.Footer}>
          Developed with
          <ion-icon name="heart" class={styles.FooterIcon}></ion-icon>© 2024{" "}
        </p>
        {/* <ion-icon name="heart"></ion-icon> */}
        {/* <img className={styles.FooterIcon} src={logo} alt="red-heart-icon" /> */}
        {/* <p> © 2024</p> */}
      </footer>
    </>
  );
}
