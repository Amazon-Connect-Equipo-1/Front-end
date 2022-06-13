/* 
Register.js

Authors:
- A01379868 Jared Abraham Flores Guarneros

Creation date: 30/05/2022
Last modification date: 10/06/2022

(Decripción)
*/

//Import Modules
import "../../styles/Login/Login.css";
import logo from "../../images/logo_bbva.png";
import LoginForm from "./LoginForm";

const Register = (props) => {
  return (
    <div className="rp-main-container">
      <div className="rp-container">
        <img src={logo} alt="logo" className="rp-logo" />
      </div>
    </div>
  );
};

export default Register;
