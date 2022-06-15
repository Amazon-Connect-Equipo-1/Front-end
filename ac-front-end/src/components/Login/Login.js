/* 
Login.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 26/05/2022
Last modification date: 01/06/2022

Program that displays the login interface.
*/

import "../../styles/Login/Login.css";
import logo from "../../images/logo_bbva.png";
import LoginForm from "./LoginForm";
import About from "./About";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = (props) => {
  document.body.classList.add("dark");
  const [showAbout, setShowAbout] = useState(false);
  const onShowAbout = () => {
    setShowAbout(!showAbout);
  };
  // Language
  const { t } = useTranslation();
  if (!showAbout) {
    console.log(process.env.REACT_APP_ENDPOINT_BACK_END);
    return (
      <div className="log-main-container">
        <div className="log-container">
          <img src={logo} alt="logo" className="log-logo" />
          <LoginForm />
        </div>
        <Link to="login/about" className="log-about" onClick={onShowAbout}>
          {t("about")}
        </Link>
      </div>
    );
  } else {
    return <About onChangeShow={onShowAbout} />;
  }
};

export default Login;
