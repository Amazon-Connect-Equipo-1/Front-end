/* Forgotten Password Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/Login/ForgottenPasswordForm.css";
import logo from "../../images/logo_bbva.png";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Creates the constant Forgotten Password
const ForgottenPasswordForm = (props) => {
  // Language
  const { t } = useTranslation();

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

      fetch("http://35.88.250.238:8080/auth/forgotPassword", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          const resultJSON = JSON.parse(result);
          console.log(Object.keys(resultJSON).length);
          if (Object.keys(resultJSON).length > 1) {
            alert(resultJSON.message);
          } else {
            alert("Token enviado para restrablecer la contraseña");
            navigate("/confirm-password", { replace: true });
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("Ingresa un email válido");
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
