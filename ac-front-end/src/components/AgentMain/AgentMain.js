/* Agent Main
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/AgentMain.css";
import ThirdPartyContainer from "./ThirdPartyContainer";
import TutorialsContainer from "../Tutorials/TutorialsContainer";
import AmazonConnect from "./AmazonConnect";
import RecordScreen from "./RecordScreen";
import { useEffect, useState } from "react";

//Creates Main Agent
const AgentMain = (props) => {
  //Local storage for making a reload in agent main
  // console.log(
  //   "need refresh actual value",
  //   window.localStorage.getItem("needRefresh")
  // );
  // console.log(window.localStorage.getItem("needRefresh") === "true");
  if (window.localStorage.getItem("needRefresh") === "true") {
    window.localStorage.setItem("needRefresh", false);
    // console.log(window.localStorage.getItem("needRefresh"));
    // setTimeout(() => {
    //   console.log("reloaaaddljenvcdsj");
    window.location.reload();
    // }, 200);
  }

  const [butto, setButto] = useState(false);

  const onChangeButto = () => {
    // setButto(!butto);
    // console.log(butto);
    window.location.reload();
  };

  const showAC = () => {
    window.location.reload();
    return <AmazonConnect />;
  };

  return (
    <div className="agM-main-container" data-aos="fade-up">
      <div
        className="agM-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <TutorialsContainer />
        <ThirdPartyContainer />

        {/* {butto && showAC()} */}

        {/* <div style={{ visibility: butto ? "visible" : "hidden" }}> */}
        <AmazonConnect />
        {/* </div> */}
      </div>
    </div>
  );
};
export default AgentMain;
