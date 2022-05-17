import "../../styles/AgentMain/AgentMain.css";
import ThirdPartyContainer from "./ThirdPartyContainer";

const AgentMain = (props) => {
  return (
    <div className="agM-main-container">
      <div className="agM-card-container">
        <ThirdPartyContainer />
      </div>
    </div>
  );
};
export default AgentMain;
