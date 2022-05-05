import "../../styles/AgentList/AgentList.css";
import AgentActiveCalls from "./AgentActiveCalls";
import AgentListMenu from "./AgentListMenu";
import AllAgentList from "./AllAgentsList";
import SingleAgent from "./SingleAgent";

const AgentList = (props) => {
  return (
    <div className="agl-main-container">
      <AgentListMenu />
      <div className="agl-card-container">
        <SingleAgent />
        <AllAgentList />
        <AgentActiveCalls />
      </div>
    </div>
  );
};

export default AgentList;
