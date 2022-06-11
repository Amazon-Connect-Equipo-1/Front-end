/* 
Profile.js

Authors:
- A01378688 Daniel Garcia Barajas

Creation date: 30/04/2022
Last modification date: 10/06/2022

(Decripción)
*/

//Import Modules
import "../../styles/Profile/Profile.css";
import prfl_ic from "../../images/profile_icon.png";
import { useContext } from "react";
import { GlobalContext } from "../GlobalSupplier";
import { AuthenticationContext } from "../Authentication";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  //Local storage for making a reload in agent main
  if (window.localStorage.getItem("userType") === "Agent") {
    window.localStorage.setItem("needRefresh", true);
  }

  const [, , userInfo] = useContext(GlobalContext);

  const [, , , , logout] = useContext(AuthenticationContext);

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
          {/* <Link className="prfl-return-link" to="/">
            <button className="prfl-return-btn">Return</button>
          </Link> */}
          {/* Link that we send https://drive.google.com/file/d/[image_id]/view?usp=sharing */}
          {/* Link that we need to put in src
          https://drive.google.com/uc?export=view&id=[image_id] */}
          {/*
          <img
            src={window.localStorage.getItem("profile_picture")}
            alt="profile_ic"
            className="prfl-ic"
        /> */}
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
            {/* <br />
            <p className="prfl-label">Id</p>
            <p className="prfl-label-info">
              {window.localStorage.getItem("id")}
            </p>
            <br /> */}
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
