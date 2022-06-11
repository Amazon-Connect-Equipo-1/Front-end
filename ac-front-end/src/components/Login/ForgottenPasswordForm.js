/* 
ForgottenPasswordForm.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 26/05/2022
Last modification date: 08/06/2022

Program that displays the forgotten password form to send the verification token to the email provided.
*/

//Import Modules
import "../../styles/Login/ForgottenPasswordForm.css";
import logo from "../../images/logo_bbva.png";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Creates the constant Forgotten Password
const ForgottenPasswordForm = (props) => {
  // Language
  const { t } = useTranslation();
  // Interaction between interfaces
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const recoverPasswordHandler = (event) => {
    event.preventDefault();

    if (email !== "") {
      const myHeaders = new Headers();
      window.localStorage.setItem("email", email);
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      // Makes the request to backend routes to evaluate data in the db
      fetch(
        "https://backtest.bankonnect.link/auth/forgotPassword",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          const resultJSON = JSON.parse(result);
          console.log(Object.keys(resultJSON).length);
          if (Object.keys(resultJSON).length > 1) {
            alert(resultJSON.message);
          } else {
            alert(t("confirmPassword"));
            // If the user exists in db, navigates to the other form interface
            navigate("/confirm-password", { replace: true });
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      alert(t("validateEmail"));
    }
  };

  return (
    <Card className="fpf-main-container">
      <div className="fpf-container ">
        <form className="fpf-form" onSubmit={recoverPasswordHandler}>
          <p className="fpf-form-title">{t("changePassword")}</p>
          <label className="fpf-label fpf-margin-bottom-sm " for="lgf-email">
            {t("rpEmail")}
          </label>
          <input
            id="fpf-email"
            type="email"
            className="fpf-input"
            onChange={emailChangeHandler}
          />
          <button type="submit" className="fpf-button">
            {t("recoverPasswordBtn")}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default ForgottenPasswordForm;
