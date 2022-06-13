/* 
QualityControl.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López

Creation date: 16/05/2022
Last modification date: 10/06/2022

(Decripción)
*/

import AgentRecordings from "../AgentRecordings/AgentRecordings";
import "../../styles/AgentQualityControl/AgentQualityControl.css";
import AgentFeedbackCard from "./AgentFeedbackCard";
import { useOutlet } from "react-router-dom";

const QualityControl = (props) => {
  const outlet = useOutlet();

  //Local storage for making a reload in agent main
  window.localStorage.setItem("needRefresh", true);

  return (
    <>
      {outlet || (
        <div className="aqc-main-container">
          <div className="aqc-container">
            <AgentRecordings />
            <AgentFeedbackCard className="aqc-feedback-card" />
          </div>
        </div>
      )}
    </>
  );
};
export default QualityControl;
