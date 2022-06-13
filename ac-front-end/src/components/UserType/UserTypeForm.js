/* 
UserType.js

Authors:
- A01750185 Amy Murakami Tsutsumi

Creation date: 02/05/2022
Last modification date: 02/05/2022

Component that can be used to select the type of user who will log in.
*/

//Import Modules
import Card from "../UI/Card";
import "../../styles/UserType/UserTypeForm.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserTypeForm = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="utf-main-container">
      <div className="utf-container ">
        <form className="utf-form">
          <p className="utf-form-title">{t("selectUserType")}</p>
          <Link to="login">
            <button className="utf-button">{t("utAgent")}</button>
          </Link>
          <Link to="login">
            <button className="utf-button">{t("utClient")}</button>
          </Link>
        </form>
      </div>
    </Card>
  );
};

export default UserTypeForm;
