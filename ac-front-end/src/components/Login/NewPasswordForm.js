/* New Password Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/Login/NewPasswordForm.css";
import logo from "../../images/logo_bbva.png";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPasswordForm = (props) => {
  // Language
  const { t } = useTranslation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const newPasswordChangeHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const tokenChangeHandler = (event) => {
    setToken(event.target.value);
  };

  const saveNewPasswordHandler = (event) => {
    event.preventDefault();
    if (newPassword === confirmNewPassword){
      console.log("Contraseñas coinciden")
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: window.localStorage.getItem("email"),
        confirmation_code: token,
        password: newPassword
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://35.88.250.238:8080/auth/confirmPassword", requestOptions)
        .then(response => response.text())
        .then((result) => {
          console.log(result);
          const resultJSON = JSON.parse(result);
          console.log(Object.keys(resultJSON).includes("errors"));
          if (Object.keys(resultJSON).includes("errors")) {
            alert("Token inválido");
          } else {
            alert("Se cambió la contraseña");
            navigate("/login", { replace: true });
          }
        })
        .catch(error => console.log('error', error));

    } else {
      alert("Las contraseñas no coinciden")
    }
    
  };

  return (
    <div className="rp-main-container">
      <div className="rp-container">
        <img src={logo} alt="logo" className="rp-logo" />
        <Card className="npf-main-container">
          <div className="npf-container ">
            <form className="npf-form" onSubmit={saveNewPasswordHandler}>
              <p className="npf-form-title">{t("setNewPassword")}</p>
              <label
                className="npf-label npf-margin-bottom-sm "
                for="lgf-email"
              >
                {t("newPassword")}
              </label>
              <input
                id="npf-email"
                type="password"
                className="npf-input"
                onChange={newPasswordChangeHandler}
              />
              <div className="npf-flex">
                <label className=" npf-label npf-margin-bottom-sm npf-margin-top-md">
                  {t("confirmNewPassword")}
                </label>
              </div>
              <input 
                type="password" 
                className="npf-input"
                onChange={confirmPasswordChangeHandler} />
              <div className="fpf-flex">
                <label className=" fpf-label fpf-margin-bottom-sm fpf-margin-top-md">
                  {t("token")}
                </label>
              </div>
              <input
                type="password"
                className="fpf-input"
                onChange={tokenChangeHandler}
              />
              <button className="npf-button">{t("setNewPasswordBtn")}</button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewPasswordForm;
