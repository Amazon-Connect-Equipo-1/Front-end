/* Agent Main
Authors:
        A01777771 Stephen Strange*/

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
