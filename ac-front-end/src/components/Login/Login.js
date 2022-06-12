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

const Login = (props) => {
  document.body.classList.add("dark");

  //poner página de jared
  const onShowAbout = () => {};

  return (
    <div className="log-main-container">
      <div className="log-container">
        <img src={logo} alt="logo" className="log-logo" />
        <LoginForm />
      </div>
      <button className="log-about" onClick={onShowAbout}>
        About
      </button>
    </div>
  );
};

export default Login;
