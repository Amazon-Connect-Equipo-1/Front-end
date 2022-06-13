/*
AddAgent.js

Authors:
- A01379868 Jared Abraham Flores Guarneros

Creation date: 02/06/2022
Last modification date: 10/06/2022

(Descripción)
*/

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/AgentList/AddUser.css";

const AddAgent = (props) => {
  //input handlers-----------------------------------
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [supEmailInput, setSupEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [pictureInput, setPictureInput] = useState("");

  const nameChangeHandler = (event) => {
    window.localStorage.setItem("name", event.target.value);
    setNameInput(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    window.localStorage.setItem("password", event.target.value);
    setPasswordInput(event.target.value);
  };
  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
    setEmailInput(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    window.localStorage.setItem("phoneNumber", event.target.value);
    setPhoneInput(event.target.value);
  };
  const superEmailChangeHandler = (event) => {
    window.localStorage.setItem("superEmail", event.target.value);
    setSupEmailInput(event.target.value);
  };
  const pictureChangeHandler = (event) => {
    window.localStorage.setItem("picture", event.target.value);
    setPictureInput(event.target.value);
  };
  // Language
  const { t } = useTranslation();

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("phoneNumber");
    window.localStorage.removeItem("superEmail");
    window.localStorage.removeItem("picture");
  };

  //--------------------------------------------
  const addAgents = (event) => {
    const token = window.localStorage.getItem("token");
    const name = window.localStorage.getItem("name");
    const password = window.localStorage.getItem("password");
    const email = window.localStorage.getItem("email");
    const phoneNumber = window.localStorage.getItem("phoneNumber");
    const superEmail = window.localStorage.getItem("superEmail");
    const picture = window.localStorage.getItem("picture");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      super_email: superEmail,
      name: name,
      password: password,
      email: email,
      phone_number: phoneNumber,
      profile_picture: picture,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backtest.bankonnect.link/auth/signUpAgent", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
    });
  };

  return (
    <div className="adu-container">
      <p className="adu-title">{t("addAgent")}</p>
      <label className="adu-label">{t("name")}</label>
      <input
        className="adu-input"
        id="name"
        type="text"
        placeholder="Name"
        onChange={nameChangeHandler}
        value={nameInput}
      />
      <label className="adu-label">{t("email")}</label>
      <input
        className="adu-input"
        id="email"
        type="email"
        placeholder="Email"
        onChange={emailChangeHandler}
        value={emailInput}
      />
      <label className="adu-label">{t("password")}</label>
      <input
        className="adu-input"
        id="password"
        type="text"
        placeholder="Password"
        onChange={passwordChangeHandler}
        value={passwordInput}
      />
      <label className="adu-label">{t("phoneNumber")}</label>
      <input
        className="adu-input"
        id="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={phoneNumberChangeHandler}
        value={phoneInput}
      />

      <label className="adu-label">{t("administratorEmail")}</label>
      <input
        className="adu-input"
        id="AdministratorEmail"
        type="email"
        placeholder="Administrator Email"
        onChange={superEmailChangeHandler}
        value={supEmailInput}
      />
      <label className="adu-label">{t("profilePicture")}</label>
      <input
        className="adu-input"
        id="profilePicture"
        type="text"
        placeholder="Profile Picture"
        onChange={pictureChangeHandler}
        value={pictureInput}
      />
      <button
        className="adu-send-btn"
        style={{
          opacity:
            emailInput.includes("@") &&
            nameInput &&
            emailInput &&
            phoneInput &&
            passwordInput &&
            pictureInput &&
            supEmailInput &&
            supEmailInput.includes("@")
              ? "1.0"
              : "0.5",
          pointerEvents:
            emailInput.includes("@") &&
            nameInput &&
            emailInput &&
            phoneInput &&
            passwordInput &&
            pictureInput &&
            supEmailInput &&
            supEmailInput.includes("@")
              ? "all"
              : "none",
        }}
        onClick={(e) => {
          addAgents();
          restart();
          props.onChange();
        }}
      >
        {t("save")}
      </button>
    </div>
  );
};

export default AddAgent;
