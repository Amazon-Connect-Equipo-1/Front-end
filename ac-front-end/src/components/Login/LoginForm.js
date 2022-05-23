import Card from "../UI/Card";
import "../../styles/Login/LoginForm.css";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../Authentication";

const LoginForm = (props) => {
  // Language
  const { t } = useTranslation();

  // Authentication
  const [user, setUser, login, logout] = useContext(AuthenticationContext);
  //const [userType, setUserType] = useContext(AuthenticationContext);

  const navigate = useNavigate();

  // Attend the event of change in the email input
  const emailChangeHandler = (event) => {
    //setUser(event.target.value);
    //setUser("Jim");
  };

  // Attend the click button
  const loginHandler = (event) => {
    event.preventDefault();
    login("Jim", "Agent");
    console.log(user);
  };

  return (
    <Card className="lgf-main-container">
      <div className="lgf-container ">
        <form className="lgf-form">
          <p className="lgf-form-title">{t("signIn")}</p>
          <label className="lgf-label lgf-margin-bottom-sm ">Email</label>
          <input
            id="lgf-email"
            type="email"
            className="lgf-input"
            onChange={emailChangeHandler}
          />
          <div className="lgf-flex">
            <label className=" lgf-label lgf-margin-bottom-sm lgf-margin-top-md">
              {t("password")}
            </label>
            <NavLink to="/forgot-password" className="lgf-forgot-text">
              {t("fyp")}
            </NavLink>
          </div>
          <input type="password" className="lgf-input" />
          <button type="submit" className="lgf-button" onClick={loginHandler}>
            {t("signInBtn")}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
