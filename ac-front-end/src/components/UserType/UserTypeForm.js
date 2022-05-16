import Card from "../UI/Card";
import "../../styles/UserType/UserTypeForm.css";
import { useTranslation } from "react-i18next";

const UserTypeForm = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="utf-main-container">
      <div className="utf-container ">
        <form className="utf-form">
          <p className="utf-form-title">{t("selectUserType")}</p>

          <button className="utf-button">{t("utAgent")}</button>

          <button className="utf-button">{t("utClient")}</button>
        </form>
      </div>
    </Card>
  );
};

export default UserTypeForm;
