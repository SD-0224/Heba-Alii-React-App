import React from "react";
import styles from "../DetailsPage/SubTopicBox.module.css";
export default function SubTopicsBox({ topic, subtopicsData }) {
  return (
    <>
      <section className={styles.Section}>
        <div className={`${styles.SubtopicsBox} ${styles.ContainerDetails}`}>
          <li className={styles.SubtopicsHead}>{topic} SUB TOPICS</li>
          {subtopicsData.map((subtopic, index) => (
            <li key={`sub ${index}`} className={styles.Subtopic}>
              {subtopic}
              <span className={styles.CircleChecked} />
            </li>
          ))}
        </div>
      </section>
    </>
  );
}
