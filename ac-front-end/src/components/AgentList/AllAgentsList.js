import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";

const AllAgentList = (props) => {
  return (
    <div className="aal-main-container">
      <p className="aal-title">All Agents</p>
      <div>
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
      </div>
    </div>
  );
};

export default AllAgentList;
