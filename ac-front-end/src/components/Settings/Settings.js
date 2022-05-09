import React from "react";
import "../../styles/Settings/Settings.css";
function Settings() {
  return (
    <div className="stngs-main-container">
      <div className="stngs-container">
        <div className="stngs-option">
          <p>Text Size</p>
          <select className="stngs-select">
            <option value="Normal">Normal</option>
            <option value="Small">Small</option>
            <option value="Big">Big</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>Theme</p>
          <select className="stngs-select">
            <option value="DarkMode">Dark Mode</option>
            <option value="LightMode">Light Mode</option>
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
    </div>
  );
}

export default Settings;
