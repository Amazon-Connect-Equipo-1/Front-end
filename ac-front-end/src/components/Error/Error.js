/*
Error.js

Authors:
- A01750145 Miguel Ángel Pérez López
traduction:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 15/05/2022
Last modification date: 15/05/2022

Program that displays the error interface when an error occurs. 
*/

//Import Modules
import React from "react";
import "../../styles/Error/Error.css";
import { useTranslation } from "react-i18next";

const Error = (props) => {
  const errorType = props.interface === "Login" ? "lerr" : "";

  // Language
  const { t } = useTranslation();

  return (
    <div className={`err-container ${errorType}`}>
      <h1 className={`err-title ${errorType}`}>404</h1>
      <h2 className={`err-subtitle ${errorType}`}>{t("notFound")}</h2>
      <p className={`err-description ${errorType}`}>{t("source")}</p>
    </div>
  );
};

export default Error;
