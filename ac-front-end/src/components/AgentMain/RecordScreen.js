import React from "react";
import "../../styles/AgentMain/RecordScreen.css";
import { VscRecord } from "react-icons/vsc";
import { VscStopCircle } from "react-icons/vsc";
import { FiUpload } from "react-icons/fi";

const RecordScreen = (props) => {
  return (
    <div className="rs-main-container">
      <h2 className="rs-title">Record</h2>
      <div className="rs-buttons-container">
        <button className="rs-button">
          <VscRecord />
        </button>
        <button className="rs-button">
          <VscStopCircle />
        </button>
        <button className="rs-button">
          <FiUpload />
        </button>
      </div>
    </div>
  );
};

export default RecordScreen;
