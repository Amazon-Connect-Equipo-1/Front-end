import "../../styles/AgentList/AllAgentsList.css";
import profile_thumbnail from "../../images/profile_icon.png";
import telephone from "../../images/telephone_call.png";
import { useTranslation } from "react-i18next";

const AgentRow = (props) => {
  const circleColor = "red";

  return (
    <div className="aal-row-container">
      <img
        className="aal-profile-picture"
        src={profile_thumbnail}
        alt="Profile picture"
      />
      <p className="aal-text">{props.agentName}</p>
      <div className="circulo"></div>
      <img
        className="aal-telephone-picture"
        src={telephone}
        alt="Telephone picture"
      />
    </div>
  );
};

export default AgentRow;
