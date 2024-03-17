// import "../styles/HeaderButtons.css";

import React, { useState, useEffect } from "react";
function DarkeMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    setIsDarkMode(darkMode === true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <button
        id="toggle-button"
        className="header-buttons"
        onClick={toggleDarkMode}
      >
        <span id="mode-icon" className="mode-icon-moon"></span>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
}

export default DarkeMode;
