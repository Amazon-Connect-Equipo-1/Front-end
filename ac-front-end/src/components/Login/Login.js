/* 
Login.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Start Date: 2022-05-26
End Date: 2022-06-01

Program that displays the login interface.
*/

import "../../styles/Login/Login.css";
import logo from "../../images/logo_bbva.png";
import LoginForm from "./LoginForm";

const Login = (props) => {
  document.body.classList.add("dark");

  return (
    <div className="log-main-container">
      <div className="log-container">
        <img src={logo} alt="logo" className="log-logo" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
