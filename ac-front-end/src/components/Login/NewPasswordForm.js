import "../../styles/Login/NewPasswordForm.css";
import logo from "../../images/logo_bbva.png";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";

const NewPasswordForm = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="fpf-main-container">
      <div className="fpf-container ">
        <form className="fpf-form">
          <p className="fpf-form-title">{t("setNewPassword")}</p>
          <label className="fpf-label fpf-margin-bottom-sm " for="lgf-email">
            {t("newPassword")}
          </label>
          <input id="fpf-email" type="password" className="fpf-input" />
          <div className="fpf-flex">
            <label className=" fpf-label fpf-margin-bottom-sm fpf-margin-top-md">
              {t("confirmNewPassword")}
            </label>
          </div>
          <input type="password" className="fpf-input" />
          <button type="submit" className="fpf-button">
            {t("setNewPasswordBtn")}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default NewPasswordForm;
