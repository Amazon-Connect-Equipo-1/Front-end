import "../../styles/AgentList/SingleAgent.css";
import profile_picture from "../../images/profile_icon.png";
import percent from "../../images/porcentaje.png";

const SingleAgent = (props) => {
  return (
    <div className="sa-main-container">
      <p className="sa-title">Agent Jim Halpert</p>
      <div>
        <img
          className="sa-profile-picture"
          src={profile_picture}
          alt="Profile picture"
        />
        <img className="sa-percent-picture" src={percent} alt="%" />
      </div>
      <br />
      <p className="sa-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
    </div>
  );
};

export default SingleAgent;
