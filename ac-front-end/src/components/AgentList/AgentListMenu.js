import "../../styles/AgentList/AgentListMenu.css";

const AgentListMenu = (props) => {
  return (
    <div className="aglm-menu-container">
      <div className="aglm-button-container">
        <button className="aglm-button-main">Main</button>
        <button className="aglm-button-settings">Settings</button>
      </div>
      <div className="aglm-search-container">
        <input
          className="aglm-search"
          id="aglm-search"
          type="search"
          placeholder="Search..."
        />
        <select className="aglm-select">
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
