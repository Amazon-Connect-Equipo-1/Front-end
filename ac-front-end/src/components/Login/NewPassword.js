/* 

𝐍𝐞𝐰 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝
𝐀𝐮𝐭𝐨𝐫𝐬:
        A01749448 Jorge Chávez Badillo
        A01750185 Amy Murakami Tsutsumi
        A01749373 Ariadna Jocelyn Guzmán Jiménez
𝐒𝐭𝐚𝐫𝐭 𝐃𝐚𝐭𝐞: 
𝐄𝐧𝐝 𝐃𝐚𝐭𝐞:

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
