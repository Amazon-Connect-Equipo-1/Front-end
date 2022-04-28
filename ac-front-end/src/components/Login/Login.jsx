import "../../styles/Login/Login.css";
import logo from"../../images/logo_bbva.png"; 

const Login = (props) => {
    return (
        <div className="login-contenedor">
            <div>
                <img className="login-logo-bbva" src={logo} alt="BBVA Logo"/>       
            </div>
            <div className="login-datos">
                <img width="100px" src={logo} alt="BBVA Logo"/>       
            </div>
        </div>
    )
};

export default Login;

/* <label for="name"></label>
            <input type="text" id="name" name="name"></input>
            <br />
            <label for="name"></label>
            <input type="text" id="name" name="name"></input>*/