/*
AddManager.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 02/06/2022
Last modification date: 14/06/2022

Program that allows the creation of a manager in a manager account. 
*/

import React from "react";
import "../../styles/AgentList/AddUser.css";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import toast from "react-hot-toast";

const AddManager = (props) => {
  //input handlers-----------------------------------
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [pictureInput, setPictureInput] = useState("");

  const nameChangeHandler = (event) => {
    //window.localStorage.setItem("name", event.target.value);
    setNameInput(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    //window.localStorage.setItem("password", event.target.value);
    setPasswordInput(event.target.value);
  };
  const emailChangeHandler = (event) => {
    //window.localStorage.setItem("email", event.target.value);
    setEmailInput(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    //window.localStorage.setItem("phoneNumber", event.target.value);
    setPhoneInput(event.target.value);
  };
  const pictureChangeHandler = (event) => {
    //window.localStorage.setItem("picture", event.target.value);
    setPictureInput(event.target.value);
  };
  // Language
  const { t } = useTranslation();

  //--------------------------------
  const [role, setRole] = useState();
  const [roleA, setRoleA] = useState("adu-Admin-btn");
  const [roleQ, setRoleQ] = useState("adu-QA-btn");
  const changeConfigRoleA = () => {
    setRoleA("adu-AdminP-btn");
    setRoleQ("adu-QA-btn");
    setRole(false);
  };
  const changeConfigRoleQ = () => {
    setRoleA("adu-Admin-btn");
    setRoleQ("adu-QAP-btn");
    setRole(true);
  };
  const addManager = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: nameInput,
      password: passwordInput,
      email: emailInput,
      role: role,
      phone_number: phoneInput,
      profile_picture: pictureInput,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_ENDPOINT_BACK_END + "auth/signUpManager",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };
  return (
    <div className="adu-container">
      <p className="adu-title">{t("addManager")}</p>
      <label className="adu-label">{t("name")}</label>
      <input
        className="adu-input"
        id="name"
        type="text"
        placeholder={t("name")}
        onChange={nameChangeHandler}
        value={nameInput}
      />
      <label className="adu-label">{t("emailManager")}</label>
      <input
        className="adu-input"
        id="email"
        type="email"
        placeholder={t("emailManager")}
        onChange={emailChangeHandler}
        value={emailInput}
      />
      <label className="adu-label">{t("passwordManager")}</label>
      <input
        className="adu-input"
        id="password"
        type="text"
        placeholder={t("passwordManager")}
        onChange={passwordChangeHandler}
        value={passwordInput}
      />
      <label className="adu-label">{t("phoneNumber")}</label>
      <input
        className="adu-input"
        id="phoneNumber"
        type="text"
        placeholder={t("phoneNumber")}
        onChange={phoneNumberChangeHandler}
        value={phoneInput}
      />
      <label className="adu-label">{t("profilePicture")}</label>
      <input
        className="adu-input"
        id="profilePicture"
        type="text"
        placeholder={t("profilePicture")}
        onChange={pictureChangeHandler}
        value={pictureInput}
      />
      <div className="adu-role-container">
        <button className={roleA} onClick={changeConfigRoleA}>
          {t("administrator")}
        </button>
        <button className={roleQ} onClick={changeConfigRoleQ}>
          QA
        </button>
      </div>

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
            (roleA || roleQ)
              ? "1.0"
              : "0.5",
          pointerEvents:
            emailInput.includes("@") &&
            nameInput &&
            emailInput &&
            phoneInput &&
            passwordInput &&
            pictureInput &&
            (roleA || roleQ)
              ? "all"
              : "none",
        }}
        onClick={(e) => {
          addManager();

          props.onChange();
        }}
      >
        {t("save")}
      </button>
    </div>
  );
};

export default AddManager;
