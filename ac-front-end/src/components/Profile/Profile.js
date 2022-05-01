import "../../styles/Profile/Profile.css";
import prfl_ic from "../../images/profile_icon.png";
const Profile = (props) => {
  return (
    <div className="prfl-main-container">
      <div className="prfl-sub-container">
        <div className="prfl-container">
          <img src={prfl_ic} alt="profile_ic" className="prfl-ic" />
          <div className="prfl-info-container">
            <p className="prfl-name">Jim Halpert</p>
            <br />
            <p className="prfl-label">Id</p>
            <p className="prfl-label-info">3005</p>
            <br />
            <p className="prfl-label">Email</p>
            <p className="prfl-label-info">front-end@mvp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
