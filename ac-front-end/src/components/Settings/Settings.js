import React, { useContext, useEffect, useState } from "react";
import "../../styles/Settings/Settings.css";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";

function Settings() {
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

  if (localStorage) {
    theme = localStorage.getItem("theme");
    txtSize = localStorage.getItem("txtSize");
  }

  if (
    txtSize === smallTxtSize ||
    txtSize === mediumTxtSize ||
    txtSize === bigTxtSize
  ) {
    body.classList.add(txtSize);
  } else {
    body.classList.add(smallTxtSize);
    body.classList.add(mediumTxtSize);
    body.classList.add(bigTxtSize);
  }

  const switchTxtSize = (s) => {
    console.log(s);
    body.classList.replace(txtSize, s);
    localStorage.setItem("txtSize", s);
    txtSize = s;
  };

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
    body.classList.add(lightTheme);
    body.classList.add(darkTheme_Protanopia);
    body.classList.add(darkTheme_Deuteranopia);
    body.classList.add(darkTheme_Tritanopia);
    body.classList.add(darkTheme_Protanomaly);
    body.classList.add(darkTheme_Deuteranomaly);
    body.classList.add(darkTheme_Tritanomaly);
  }

  const switchTheme = (e) => {
    console.log(e);
    body.classList.replace(theme, e);
    localStorage.setItem("theme", e);
    theme = e;
  };

  // Language
  const { t } = useTranslation();

  const { locale } = useContext(LocaleContext);

  function changeLocale() {
    const l = document.getElementById("lang").value;
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  useEffect(() => {
    document.getElementById("theme-select").value = theme;
    document.getElementById("size-select").value = txtSize;
  });
  return (
    <Card className="stngs-main-container">
      <div className="stngs-container">
        <div className="stngs-option">
          <p>{t("textSize")}</p>
          <select
            id="size-select"
            className="stngs-select"
            onChange={(j) => switchTxtSize(j.target.value)}
          >
            <option value="medium">Medium (Default)</option>
            <option value="small">Small</option>
            <option value="big">Big</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>{t("theme")}</p>
          <select
            id="theme-select"
            className="stngs-select"
            onChange={(i) => switchTheme(i.target.value)}
          >
            <option value="dark">Dark Mode (Default)</option>
            <option value="light">Light Mode</option>
            <option value="dark_protanopia">Dark Mode (Protanopia)</option>
            <option value="dark_deuteranopia">Dark Mode (Deuteranopia)</option>
            <option value="dark_tritanopia">Dark Mode (Tritanopia)</option>
            <option value="dark_protanomaly">Dark Mode (Protanomaly)</option>
            <option value="dark_deuteranomaly">
              Dark Mode (Deuteranomaly)
            </option>
            <option value="dark_tritanomaly">Dark Mode (Tritanomaly)</option>
          </select>
        </div>
        <div className="stngs-option">
          <p>{t("language")}</p>
          <select
            id="lang"
            className="stngs-select"
            onChange={() => changeLocale()}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
    </Card>
  );
}

/*
<button onClick={() => changeLocale("es")}>Español</button>
<button onClick={() => changeLocale("en")}>English</button>
*/
export default Settings;
