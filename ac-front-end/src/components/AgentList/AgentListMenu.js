import "../../styles/AgentList/AgentListMenu.css";
import { saveKeys, saveClick } from "../MonitorModule.js";

const AgentListMenu = (props) => {
  const INPUT_NAME = "agent";

  return (
    <div className="aglm-menu-container">
      <div className="aglm-button-container">
        <button
          onClick={() => saveClick(`${INPUT_NAME} main button`)}
          className="aglm-button-main"
        >
          Main
        </button>
        <button
          onClick={() => saveClick(`${INPUT_NAME} settings button`)}
          className="aglm-button-settings"
        >
          Settings
        </button>
      </div>
      <div className="aglm-search-container">
        <input
          className="aglm-search"
          id="aglm-search"
          type="search"
          placeholder="Search..."
          onClick={() => saveClick(`${INPUT_NAME} input`)}
          onKeyDown={saveKeys}
        />
        <select
          className="aglm-select"
          onClick={() => saveClick(`${INPUT_NAME} filter scroller`)}
        >
          <option>Filter</option>
          <option value="Name">Date</option>
          <option value="Active Calls">Tag</option>
          <option value="Active Calls">Status</option>
        </select>
      </div>
    </div>
  );
};

export default AgentListMenu;
