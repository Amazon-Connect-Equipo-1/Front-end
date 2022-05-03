import "../../styles/AgentList/AgentList.css";
import AgentActiveCalls from "./AgentActiveCalls";
import AllAgentList from "./AllAgentsList";
import SingleAgent from "./SingleAgent";

const AgentList = (props) => {
  return (
    <div className="agl-main-container">
      <div className="agl-menu-container">
        <button className="agl-button-main">Main</button>
        <button className="agl-button-settings">Settings</button>
        <div></div>
        <div></div>
        <div></div>
        <input
          className="agl-search"
          id="agl-search"
          type="search"
          placeholder="Search..."
        />
        <select className="agl-select">
          <option>Filter</option>
          <option value="Name">Date</option>
          <option value="Active Calls">Tag</option>
          <option value="Active Calls">Status</option>
        </select>
      </div>
      <div className="agl-sub-container">
        <SingleAgent />
        <AllAgentList />
        <AgentActiveCalls />
      </div>
    </div>
  );
};

export default AgentList;
