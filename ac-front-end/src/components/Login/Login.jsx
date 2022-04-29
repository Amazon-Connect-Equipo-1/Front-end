import "../../styles/Login/Login.css";
import logo from"../../images/logo_bbva.png"; 

const Login = (props) => {
    return (
        <div className="login-contenedor">
            <div className="contenedor-imagen-datos">
                <div className="item1">
                    <img className="login-logo-bbva" src={logo} alt="BBVA Logo"/>   
                </div>
                <div className="item2">
                    <div className="form-contenedor">
                        <form action="#" method="POST">
                            <h1>Sign In</h1>
                            <h2>Email:</h2>
                            <p><input type="text" placeholder="Email" required name="email"/></p>
                            <h2>Password: </h2>
                            <p><input type="password" name="password" placeholder="*****"/></p>
                            <input type="submit"/>
                            <br />
                            <br />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Login;