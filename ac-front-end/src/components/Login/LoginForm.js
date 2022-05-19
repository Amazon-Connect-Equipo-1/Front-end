import Card from "../UI/Card";
import "../../styles/Login/LoginForm.css";
import { useTranslation } from "react-i18next";

const LoginForm = (props) => {
  //Language
  const { t } = useTranslation();
  return (
    <Card className="lgf-main-container">
      <div className="lgf-container ">
        <form className="lgf-form">
          <p className="lgf-form-title">{t("signIn")}</p>
          <label className="lgf-label lgf-margin-bottom-sm " for="lgf-email">
            Email
          </label>
          <input id="lgf-email" type="email" className="lgf-input" />
          <div className="lgf-flex">
            <label className=" lgf-label lgf-margin-bottom-sm lgf-margin-top-md">
              {t("password")}
            </label>
            <a href="/" className="lgf-forgot-text">
              {t("fyp")}
            </a>
          </div>
          <input type="password" className="lgf-input" />
          <button type="submit" className="lgf-button">
            {t("signInBtn")}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
