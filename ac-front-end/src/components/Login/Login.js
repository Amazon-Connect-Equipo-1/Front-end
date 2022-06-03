/* 

𝐋𝐨𝐠𝐢𝐧
𝐀𝐮𝐭𝐨𝐫𝐬:
        A01749448 Jorge Chávez Badillo
        A01750185 Amy Murakami Tsutsumi
        A01749373 Ariadna Jocelyn Guzmán Jiménez
𝐒𝐭𝐚𝐫𝐭 𝐃𝐚𝐭𝐞: 
𝐄𝐧𝐝 𝐃𝐚𝐭𝐞:

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
