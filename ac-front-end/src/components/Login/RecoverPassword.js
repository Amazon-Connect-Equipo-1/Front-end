/* 
RecoverPassword.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Start Date: 2022-05-26
End Date: 2022-06-01

Program that displays the interface for the email to change the password.
*/

//Import Modules
import "../../styles/Login/RecoverPassword.css";
import logo from "../../images/logo_bbva.png";
import LoginForm from "./LoginForm";
import ForgottenPasswordForm from "./ForgottenPasswordForm";
import NewPasswordForm from "./NewPasswordForm";

const RecoverPassword = (props) => {
  return (
    <div className="rp-main-container">
      <div className="rp-container">
        <img src={logo} alt="logo" className="rp-logo" />
        <ForgottenPasswordForm />
      </div>
    </div>
  );
};

export default RecoverPassword;
