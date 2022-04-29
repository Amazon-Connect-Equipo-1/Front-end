import "../../styles/Login/Login.css";
import logo from "../../images/logo_bbva.png";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div className="login-contenedor">
      <div className="contenedor-imagen-datos">
        <div className="item1">
          <img className="login-logo-bbva" src={logo} alt="BBVA Logo" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
