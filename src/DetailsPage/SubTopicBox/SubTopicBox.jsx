import React from "react";
import styles from "../SubTopicBox/SubTopicBox.module.css";
import DetailsLayoutContainer from "../ContainerLayout/ContainerDetails";
export default function SubTopicsBox({ topic, subtopicsData }) {
  return (
    <>
      <section className={styles.Section}>
        <DetailsLayoutContainer>
          <div className={styles.SubtopicsBox}>
            <li className={styles.SubtopicsHead}>{topic} SUB TOPICS</li>
            {subtopicsData.map((subtopic, index) => (
              <li key={`sub ${index}`} className={styles.Subtopic}>
                {subtopic}
                <span className={styles.CircleChecked} />
              </li>
            ))}
          </div>
        </DetailsLayoutContainer>
      </section>
    </>
  );
}
