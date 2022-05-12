import React, { useState } from "react";
import "../../styles/Settings/Settings.css";
import Card from "../UI/Card";
function Settings() {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  const darkTheme_Protanopia = "dark_protanopia";
  const darkTheme_Deuteranopia = "dark_deuteranopia";
  const darkTheme_Tritanopia = "dark_tritanopia";
  const darkTheme_Protanomaly = "dark_protanomaly";
  const darkTheme_Deuteranomaly = "dark_deuteranomaly";
  const darkTheme_Tritanomaly = "dark_tritanomaly";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (
    theme === lightTheme ||
    theme === darkTheme ||
    theme === darkTheme_Protanopia ||
    theme === darkTheme_Deuteranopia ||
    theme === darkTheme_Tritanopia ||
    theme === darkTheme_Protanomaly ||
    theme === darkTheme_Deuteranomaly ||
    theme == darkTheme_Tritanomaly
  ) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
    body.classList.add(darkTheme_Protanopia);
    body.classList.add(darkTheme_Deuteranopia);
    body.classList.add(darkTheme_Tritanopia);
    body.classList.add(darkTheme_Protanomaly);
    body.classList.add(darkTheme_Deuteranomaly);
    body.classList.add(darkTheme_Tritanomaly);
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
            <option value="dark">Dark Mode (Default)</option>
            <option value="light">Light Mode</option>
            <option value="dark_protanopia">Dark Mode (Protanopia)</option>
            <option value="dark_deuteranopia">Dark Mode (Deuteranopia)</option>
            <option value="dark_tritanopia">Dark Mode (Tritanopia)</option>
            <option value="dark_protanomaly">Dark Mode (Protanomaly)</option>
            <option value="dark_deuteranomaly">
              Dark Mode (Deuteranomaly)
            </option>
            <option value="dark_tritanomaly">Dark Mode (Tritanomaly)</option>
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
