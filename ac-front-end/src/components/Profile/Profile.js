/* 
Profile.js

Authors:
- A01378688 Daniel Garcia Barajas
- A01750145 Miguel Ángel Pérez López
- A01379868 Jared Abraham Flores Guarneros
traduction:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/04/2022
Last modification date: 10/06/2022

Program that displays the profile of the user, it contains the logout.
*/

//Import Modules
import "../../styles/Profile/Profile.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalSupplier";
import { AuthenticationContext } from "../Authentication";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  //Local storage for making a reload in agent main
  if (window.localStorage.getItem("userType") === "Agent") {
    window.localStorage.setItem("needRefresh", true);
  }

  const [, , userInfo, , , agentStatus] = useContext(GlobalContext);
  const [, , , , logout] = useContext(AuthenticationContext);
  //If the agent status == "In call", the agent icon should be disabled

  const logoutHandler = (event) => {
    logout();
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("userType");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("email");
    window.location.reload();
  };
  // Language
  const { t } = useTranslation();

  return (
    <div className="prfl-main-container" data-aos="fade-up">
      <div
        className="prfl-sub-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="prfl-container">
          <Avatar
            alt={window.localStorage.getItem("name")}
            src={window.localStorage.getItem("profile_picture")}
            className="avatar"
            sx={{
              bgcolor: "var(--highlight-color)",
              height: 200,
              width: 200,
              fontSize: 100,
            }}
          />
          <div className="prfl-info-container">
            <p className="prfl-name">{window.localStorage.getItem("name")}</p>
            <p className="prfl-label">{t("emailProfile")}</p>
            <p className="prfl-label-info">
              {window.localStorage.getItem("email")}
            </p>
            <button className="prfl-button" onClick={logoutHandler}>
              {t("logOut")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
