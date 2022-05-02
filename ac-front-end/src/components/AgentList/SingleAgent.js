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
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default SingleAgent;
