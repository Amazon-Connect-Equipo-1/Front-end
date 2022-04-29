import Card from "../UI/Card";
import "../../styles/Login/LoginForm.css";

const LoginForm = (props) => {
  return (
    <Card className="lgf-main-container">
      <div className="lgf-container ">
        <form className="lgf-form">
          <p className="lgf-form-title">Sign in</p>
          <label className="lgf-label lgf-margin-bottom-sm " for="lgf-email">
            Email
          </label>
          <input id="lgf-email" type="email" className="lgf-input" />
          <div className="lgf-flex">
            <label className=" lgf-label lgf-margin-bottom-sm lgf-margin-top-md">
              Password
            </label>
            <a href="/" className="lgf-forgot-text">
              Forgot your password?
            </a>
          </div>
          <input type="password" className="lgf-input" />
          <button type="submit" className="lgf-button">
            Sign in
          </button>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
