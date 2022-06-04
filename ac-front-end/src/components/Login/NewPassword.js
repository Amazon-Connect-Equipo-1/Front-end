/* 
NewPassword.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Start Date: 2022-05-26
End Date: 2022-06-01

Program that displays the change password interface.
*/

//Import Modules
import logo from "../../images/logo_bbva.png";
import NewPasswordForm from "./NewPasswordForm";
import "../../styles/Login/NewPassword.css";

const NewPassword = () => {
  return (
    <div className="nps-main-container">
      <div className="nps-container">
        <img src={logo} alt="logo" className="nps-logo" />
        <NewPasswordForm />
      </div>
    </div>
  );
};

export default NewPassword;
