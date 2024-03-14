import React from "react";
import "../styles/SubTopicBox.css";
export default function SubTopicsBox({ topic, subtopicsData }) {
  return (
    <>
      <section className="section">
        <div className="subtopics-box container-details">
          <li className="subtopics-head">{topic} SUB TOPICS</li>
          {subtopicsData.map((subtopic, index) => (
            <li key={`sub ${index}`} className="subtopic">
              {subtopic}
              <span className="circle-checked" />
            </li>
          ))}
        </div>
      </section>
    </>
  );
}
