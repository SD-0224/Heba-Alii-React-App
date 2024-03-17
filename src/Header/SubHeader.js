// import "../styles/SubHeader.css";
import styles from "../Header/SubHeder.module.css";

export default function SubHeader() {
  return (
    <>
      <div className="sub-header">
        <div className={styles.TriangleShaped} />
        <div className={styles.SubHederText}>
          <p className={styles.SubHederTextWelcome}>Welcome to our website!</p>
          <p className={styles.SubHederTextParagraph}>
            we have a new design that's fresh, modern and easy to use.
          </p>
        </div>
      </div>
    </>
  );
}
