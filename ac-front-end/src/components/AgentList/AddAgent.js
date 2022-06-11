/*
AddAgent.js

Authors:
- A01379868 Jared Abraham Flores Guarneros

Creation date: 02/06/2022
Last modification date: 10/06/2022

(Descripción)
*/

import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/AgentList/AddUser.css";

const AddAgent = (props) => {
  //input handlers-----------------------------------

  const nameChangeHandler = (event) => {
    window.localStorage.setItem("name", event.target.value);
  };
  const passwordChangeHandler = (event) => {
    window.localStorage.setItem("password", event.target.value);
  };
  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    window.localStorage.setItem("phoneNumber", event.target.value);
  };
  const superEmailChangeHandler = (event) => {
    window.localStorage.setItem("superEmail", event.target.value);
  };
  const pictureChangeHandler = (event) => {
    window.localStorage.setItem("picture", event.target.value);
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
      .catch((error) => console.log("error", error));
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
      />
      <label className="adu-label">{t("email")}</label>
      <input
        className="adu-input"
        id="email"
        type="text"
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      <label className="adu-label">{t("password")}</label>
      <input
        className="adu-input"
        id="password"
        type="text"
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <label className="adu-label">{t("phoneNumber")}</label>
      <input
        className="adu-input"
        id="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={phoneNumberChangeHandler}
      />

      <label className="adu-label">{t("administratorEmail")}</label>
      <input
        className="adu-input"
        id="AdministratorEmail"
        type="text"
        placeholder="Administrator Email"
        onChange={superEmailChangeHandler}
      />
      <label className="adu-label">{t("profilePicture")}</label>
      <input
        className="adu-input"
        id="profilePicture"
        type="text"
        placeholder="Profile Picture"
        onChange={pictureChangeHandler}
      />
      <button
        className="adu-send-btn"
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
