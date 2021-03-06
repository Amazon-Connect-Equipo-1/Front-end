/* 
Settings.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01378688 Daniel Garcia Barajas
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 04/05/2022
Last modification date: 10/06/2022

Program that displays the settings interface. 
*/

//Import Modules
import React, { useContext, useEffect, useState } from "react";

import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import "../../styles/Settings/Settings.css";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//Creates functions Settings and its constants
function Settings() {
  //Local storage for making a reload in agent main
  if (window.localStorage.getItem("userType") === "Agent") {
    window.localStorage.setItem("needRefresh", true);
  }

  const navigate = useNavigate();

  const toggleMusic = () => {
    console.log("Music Play/Pause");
    if (localStorage.getItem("music") === "pause") {
      localStorage.setItem("music", "play");
    } else {
      localStorage.setItem("music", "pause");
    }
    navigate("/settings");
  };
  const INPUT_NAME = "settings";

  const body = document.body;

  const lightTheme = "light";
  const darkTheme = "dark";
  const darkTheme_Protanopia = "dark_protanopia";
  const darkTheme_Deuteranopia = "dark_deuteranopia";
  const darkTheme_Tritanopia = "dark_tritanopia";
  const darkTheme_Protanomaly = "dark_protanomaly";
  const darkTheme_Deuteranomaly = "dark_deuteranomaly";
  const darkTheme_Tritanomaly = "dark_tritanomaly";
  let theme;

  const smallTxtSize = "small";
  const mediumTxtSize = "medium";
  const bigTxtSize = "big";
  let txtSize;

  // Checks if prefs are in localStorage
  if (localStorage) {
    theme = localStorage.getItem("theme");
    txtSize = localStorage.getItem("txtSize");
  }

  //Adds Text Size to body
  if (
    txtSize === smallTxtSize ||
    txtSize === mediumTxtSize ||
    txtSize === bigTxtSize
  ) {
    body.classList.add(txtSize);
  } else {
    body.classList.add(mediumTxtSize);
  }

  //Adds Theme to body
  if (
    theme === lightTheme ||
    theme === darkTheme ||
    theme === darkTheme_Protanopia ||
    theme === darkTheme_Deuteranopia ||
    theme === darkTheme_Tritanopia ||
    theme === darkTheme_Protanomaly ||
    theme === darkTheme_Deuteranomaly ||
    theme === darkTheme_Tritanomaly
  ) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  // POST preferences
  function postPreferences() {
    const myHeadersToken = new Headers();
    myHeadersToken.append("Content-Type", "application/json");
    myHeadersToken.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      user_id: localStorage.getItem("id"),
      color: localStorage.getItem("theme"),
      text_size: localStorage.getItem("txtSize"),
      language: document.getElementById("lang").value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeadersToken,
      body: raw,
    };

    //Save manager info in local storage
    fetch(
      process.env.REACT_APP_ENDPOINT_BACK_END + `userConfig/updateUserConfig`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(resultJSON);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  }

  // Switch current text size
  const switchTxtSize = (s) => {
    console.log(s);
    body.classList.replace(txtSize, s);
    localStorage.setItem("txtSize", s);
    txtSize = s;
    postPreferences();
  };

  // Switch current theme
  const switchTheme = (e) => {
    console.log(e);
    body.classList.replace(theme, e);
    localStorage.setItem("theme", e);
    theme = e;
    postPreferences();
  };

  // Language
  const { t } = useTranslation();

  const { locale } = useContext(LocaleContext);

  function changeLocale() {
    const l = document.getElementById("lang").value;
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
    document.getElementById("nav-title").textContent = t("Settings");
    postPreferences();
  }

  // Keeps select value intact
  useEffect(() => {
    document.getElementById("theme-select").value = theme;
    document.getElementById("size-select").value = txtSize;
    document.getElementById("nav-title").textContent = t("Settings");
  });

  return (
    <Card className="stngs-main-container">
      <div className="stngs-container" data-aos="fade-up">
        <div className="stngs-option">
          <p>{t("textSize")}</p>
          <select
            onClick={() => saveClick(`${INPUT_NAME} font size`)}
            id="size-select"
            className="stngs-select"
            onChange={(j) => switchTxtSize(j.target.value)}
          >
            <option value="medium">{t("textMediumSize")}</option>
            <option value="small">{t("textSmallSize")}</option>
            <option value="big">{t("textBigSize")}</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>{t("theme")}</p>
          <select
            onClick={() => saveClick(`${INPUT_NAME} theme`)}
            id="theme-select"
            className="stngs-select"
            onChange={(i) => switchTheme(i.target.value)}
          >
            <option value="dark">{t("darkTheme")}</option>
            <option value="light">{t("lightTheme")}</option>
            <option value="dark_protanopia">{t("darkProtanopiaTheme")}</option>
            <option value="dark_deuteranopia">
              {t("darkDeuteranopiaTheme")}
            </option>
            <option value="dark_tritanopia">{t("darkTritanopiaTheme")}</option>
            <option value="dark_protanomaly">
              {t("darkProtanomalyTheme")}
            </option>
            <option value="dark_deuteranomaly">
              {t("darkDeuteranomalyTheme")}
            </option>
            <option value="dark_tritanomaly">
              {t("darkTritanomalyTheme")}
            </option>
          </select>
        </div>
        <div className="stngs-option">
          <p>{t("language")}</p>
          <select
            onClick={() => saveClick(`${INPUT_NAME} language`)}
            id="lang"
            className="stngs-select"
            onChange={() => changeLocale()}
          >
            <option value="en">{t("englishLanguage")}</option>
            <option value="es">{t("spanishLanguage")}</option>
            <option value="fr">{t("frenchLanguage")}</option>
          </select>
        </div>
        <div className="stngs-restore-container">
          <button
            className="stngs-restore-btn"
            onClick={() => {
              switchTxtSize("medium");
              document.getElementById("size-select").value = "medium";
              switchTheme("dark");
              document.getElementById("theme-select").value = "dark";
              i18n.changeLanguage("en");
              document.getElementById("lang").value = "en";
              postPreferences();
            }}
          >
            {t("restoreToDefault")}
          </button>
          <div className="stngs-restore-container">
            <div>
              <button className="stngs-music-btn" onClick={toggleMusic}>
                {localStorage.getItem("music") === "play" && (
                  <div>
                    {" "}
                    <MdOutlineMusicNote />
                  </div>
                )}
                {localStorage.getItem("music") === "pause" && (
                  <div>
                    {" "}
                    <MdOutlineMusicOff />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Settings;
