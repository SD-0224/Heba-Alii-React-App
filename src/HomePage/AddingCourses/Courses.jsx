import RatingStars from "../../SharedComponent/Ratings/Rating";
import styles from "../../HomePage/AddingCourses/Courses.module.css";
import { useNavigate } from "react-router-dom";

export default function AddCourses({ contentData }) {
  const navigate = useNavigate();

  const handleClickDEtails = (id) => {
    navigate(`/details?id=${id}`);
  };

  // render the courses function
  const addContent = () => {
    return contentData.map((item) => (
      <div
        key={item.id}
        className={styles.CourseBox}
        onClick={() => handleClickDEtails(item.id)}
      >
        <img
          src={require(`../../assets/logos/${item.image}`)}
          className={styles.CoursesImg}
          alt={item.topic}
        />
        <div className={styles.CourseBoxContentContainer}>
          <p className={styles.CategoryContainer}>{item.category}</p>
          <h4 className={styles.TopicContainer}>{item.topic}</h4>
          <RatingStars numStars={5} />
          <p className={styles.AutherName}>Author: {item.name}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.CoursesContainer}>{addContent(contentData)}</div>
    </>
  );
}
