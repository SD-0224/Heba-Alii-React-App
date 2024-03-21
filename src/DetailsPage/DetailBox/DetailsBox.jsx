import RatingStars from "../../SharedComponent/Ratings/Rating";
import styles from "../DetailBox/DetailBox.module.css";
import DetailsLayoutContainer from "../ContainerLayout/ContainerDetails";

export default function DetailsBox({ cardData }) {
  return (
    <>
      <div className={styles.DetailsBox}>
        <DetailsLayoutContainer>
          <div
            className={`${styles.DetailsContent} ${styles.ContainerDetails}`}
          >
            <div className={styles.DetailsContent}></div>
            {/* <div className="details-content container-details"> */}
            <p className={styles.Category}>{cardData.category}</p>
            <h1 className={styles.Topic}>{cardData.topic}</h1>
            <div className={styles.Rating}>
              <RatingStars numStars={5} />
            </div>
            <p className={styles.Description}>{cardData.description}</p>
          </div>
        </DetailsLayoutContainer>
      </div>
    </>
  );
}
