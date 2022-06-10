/* Queality Control
Authors:
        A01777771 Stephen Strange*/

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
