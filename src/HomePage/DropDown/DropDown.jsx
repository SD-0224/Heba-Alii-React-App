import React from "react";
import styles from "../DropDown/DropDown.module.css";
export default function DropeDown({ label, id, options, onChange, classes }) {
  return (
    <>
      <div className={styles[classes.container]}>
        <label htmlFor={id}>{label}</label>
        <select id={id} className={styles[classes.pointer]} onChange={onChange}>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
