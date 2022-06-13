/* 
UserType.js

Authors:
- A01750185 Amy Murakami Tsutsumi

Creation date: 02/05/2022
Last modification date: 02/05/2022

Component containing the form to choose the type of user to log in.
*/

//Import Modules
import "../../styles/UserType/UserType.css";
import logo from "../../images/logo_bbva.png";
import UserTypeForm from "./UserTypeForm";

const UserType = (props) => {
  return (
    <div className="ut-main-container">
      <div className="ut-container">
        <img src={logo} alt="logo" className="log-logo" />
        <UserTypeForm />
      </div>
    </div>
  );
};

export default UserType;
