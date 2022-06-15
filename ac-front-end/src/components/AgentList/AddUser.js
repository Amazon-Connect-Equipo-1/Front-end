/*
AddUser.js

Authors:
- A01750145 Miguel Ángel Pérez López
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 01/06/2022
Last modification date: 06/06/2022

Program that allows the creation of a user in a manager account. 
*/

import React from "react";
import "../../styles/AgentList/AddUser.css";
import AddAgent from "./AddAgent";
import AddManager from "./AddManager";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";

const AddUser = () => {
  const [state, setState] = useState("main");
  const changeAgent = () => {
    setState("agent");
  };
  const changeAQA = () => {
    setState("manager");
  };
  const changeMain = () => {
    setState("main");
  };
  // Language
  const { t } = useTranslation();
  return (
    <div className="adu-main-container">
      <div className="adu-container">
        {state === "main" && (
          <div className="adu-container">
            <p className="adu-title">{t("selectRoleAdd")}</p>
            <button className="adu-send-btn" onClick={changeAgent}>
              {t("agentButton")}
            </button>
            <button className="adu-send-btn" onClick={changeAQA}>
              {t("adminQA")}
            </button>
          </div>
        )}
        {state === "manager" && (
          <div>
            <AddManager onChange={changeMain} />
          </div>
        )}
        {state === "agent" && (
          <div>
            <AddAgent onChange={changeMain} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
