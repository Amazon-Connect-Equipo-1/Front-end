import "../../styles/AgentList/AgentList.css";
import AgentActiveCalls from "./AgentActiveCalls";
import AllAgentList from "./AllAgentsList";
import SingleAgent from "./SingleAgent";

const AgentList = (props) => {
  return (
    <div className="agl-main-container">
      <div className="agl-sub-container">
        <SingleAgent />
        <AllAgentList />
        <AgentActiveCalls />
      </div>
    </div>
  );
};

export default AgentList;
