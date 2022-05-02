import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";

const AgentActiveCalls = (props) => {
  return (
    <div className="aal-main-container">
      <p className="aal-title">Active Calls</p>
      <div>
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
      </div>
    </div>
  );
};

export default AgentActiveCalls;
