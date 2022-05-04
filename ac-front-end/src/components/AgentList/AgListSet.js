import "../../styles/AgentList/AgListSet.css";
import AgentListSetting from "./AgentListSetting";
const AgListSet = (props) => {
  return (
    <div className="al-container">
      <div className="al-content-container">
        <div className="al-contain-container">
          <span className="al-title">Always show</span>

          <span className="al-text">(min:1 ; max:4)</span>
          <div className="al-divider"></div>
          <AgentListSetting setting={"Active Calls"} />
          <AgentListSetting setting={"All Agents"} />
          <AgentListSetting setting={"Online Agents"} />
          <AgentListSetting setting={"Offline Agents"} />
        </div>
      </div>
    </div>
  );
};
export default AgListSet;
