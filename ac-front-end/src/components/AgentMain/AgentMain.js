/*
AgentMain.js

Authors:
- A01378688 Daniel Garcia Barajas
- A01379868 Jared Abraham Flores Guarneros

Creation date: 16/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentMain/AgentMain.css";
import ThirdPartyContainer from "./ThirdPartyContainer";
import TutorialsContainer from "../Tutorials/TutorialsContainer";
import AmazonConnect from "./AmazonConnect";
import RecordScreen from "./RecordScreen";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalSupplier";

//Creates Main Agent
const AgentMain = (props) => {
  if (window.localStorage.getItem("needRefresh") === "true") {
    window.localStorage.setItem("needRefresh", false);
    window.location.reload();
  }

  return (
    <div className="agM-main-container" data-aos="fade-up">
      <div
        className="agM-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <TutorialsContainer />
        <ThirdPartyContainer />
        <AmazonConnect />
      </div>
    </div>
  );
};
export default AgentMain;
