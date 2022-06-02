/* Single Agent
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/SingleAgent.css";
import profile_picture from "../../images/profile_icon.png";
import percent from "../../images/porcentaje.png";

const SingleAgent = (props) => {
  return (
    <div className="sa-main-container">
      <p className="sa-title">{props.agent.agentName}</p>
      <div className="sa-graphics-container">
        <img
          className="sa-profile-picture"
          src={profile_picture}
          alt="Profile picture"
        />
        <img className="sa-percent-picture" src={percent} alt="%" />
      </div>
      <div className="sa-info-container">
        <p className="sa-text">{props.agent.description}</p>
        <textarea
          className="sa-input"
          type="text"
          //onChange={changeFeedbackHandler}
        />
        <button className="sa-send-btn" /*onClick={sendFeedback}*/>Send</button>
      </div>
    </div>
  );
};

export default SingleAgent;
