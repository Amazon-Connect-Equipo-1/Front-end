/*
ThirdPartyContainer.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López

Creation date: 17/05/2022
Last modification date: 17/05/2022

Program that displays the Third-Party-Services component.
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { createContext, Suspense, useState } from "react";

const ThirdPartyContainer = (props) => {
  return (
    <div className="tp-main-container">
      <ThirdParty />
    </div>
  );
};
export default ThirdPartyContainer;
