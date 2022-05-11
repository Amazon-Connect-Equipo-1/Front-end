import React, { useState } from "react";
import "../../styles/Settings/Settings.css";
import Card from "../UI/Card";
function Settings() {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    console.log(e);
    body.classList.replace(theme, e);
    localStorage.setItem("theme", e);
    theme = e;
  };

  return (
    <Card className="stngs-main-container">
      <div className="stngs-container">
        <div className="stngs-option">
          <p>Text Size</p>
          <select className="stngs-select">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Big">Big</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>Theme</p>
          <select
            className="stngs-select"
            onChange={(i) => switchTheme(i.target.value)}
          >
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>Language</p>
          <select className="stngs-select">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
    </Card>
  );
}

export default Settings;
