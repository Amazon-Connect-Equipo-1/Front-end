/* Agent Main
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/AgentMain.css";
import ThirdPartyContainer from "./ThirdPartyContainer";
import TutorialsContainer from "../Tutorials/TutorialsContainer";
import AmazonConnect from "./AmazonConnect";
import RecordScreen from "./RecordScreen";

//Creates Main Agent
const AgentMain = (props) => {
  return (
    <div className="agM-main-container">
      <div className="agM-card-container">
        <TutorialsContainer />
        <div>
          <ThirdPartyContainer />
          <RecordScreen />
        </div>
        <AmazonConnect />
      </div>
    </div>
  );
};
export default AgentMain;
