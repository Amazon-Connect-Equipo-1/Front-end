/* Single Agent
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/SingleAgent.css";
import profile_picture from "../../images/profile_icon.png";
import percent from "../../images/porcentaje.png";
import { useContext } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";

const SingleAgent = (props) => {
  const [, selectedAgent] = useContext(AgentAAndQAContext);

  return (
    <div className="sa-main-container">
      <p className="sa-title">{selectedAgent.agentName}</p>
      <div className="sa-graphics-container">
        <img
          className="sa-profile-picture"
          src={profile_picture}
          alt="Profile picture"
        />
        <img className="sa-percent-picture" src={percent} alt="%" />
      </div>
      <div className="sa-info-container">
        <p className="sa-text">{selectedAgent.description}</p>
        {window.localStorage.getItem("userType") === "Quality-agent" && (
          <div className="sa-feedback">
            <textarea
              className="sa-input"
              type="text"
              //onChange={changeFeedbackHandler}
            />
            <button className="sa-send-btn" /*onClick={sendFeedback}*/>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleAgent;
