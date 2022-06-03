/* 

𝐑𝐞𝐜𝐨𝐯𝐞𝐫 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝
𝐀𝐮𝐭𝐨𝐫𝐬:
        A01749448 Jorge Chávez Badillo
        A01750185 Amy Murakami Tsutsumi
        A01749373 Ariadna Jocelyn Guzmán Jiménez
𝐒𝐭𝐚𝐫𝐭 𝐃𝐚𝐭𝐞: 
𝐄𝐧𝐝 𝐃𝐚𝐭𝐞:

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
