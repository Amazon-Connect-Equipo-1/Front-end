import "../../styles/AgentMain/AgentMain.css";
import ThirdPartyContainer from "./ThirdPartyContainer";
import TutorialsContainer from "../Tutorials/TutorialsContainer";

const AgentMain = (props) => {
  return (
    <div className="agM-main-container">
      <div className="agM-card-container">
        {<TutorialsContainer />}
        <ThirdPartyContainer />
      </div>
    </div>
  );
};
export default AgentMain;
