import React from "react";
import "../../styles/Settings/Settings.css";
import Card from "../UI/Card";
function Settings() {
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
    </Card>
  );
}

export default Settings;
