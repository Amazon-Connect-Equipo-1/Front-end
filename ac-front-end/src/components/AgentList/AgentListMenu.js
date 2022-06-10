/* Agent List Menu
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/AgentListMenu.css";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import { Autocomplete, TextField } from "@mui/material";

const AgentListMenu = (props) => {
  const INPUT_NAME = "agent";
  // Language
  const { t } = useTranslation();

  const [addUserMenu, setAddUserMenu] = useState(false);
  const [comment, setComment] = useState("");
  const [searchString, setSearchString] = useState("");
  const [, selectedAgent, , sendFeedback] = useContext(AgentAAndQAContext);
  // const [, , , sendFeedback] = useContext(AgentAAndQAContext);

  const onChangeAddUserMenu = () => {
    addUserMenu ? setAddUserMenu(false) : setAddUserMenu(true);
    props.changeCard(addUserMenu);
  };

  const getBtnString = () => {
    return addUserMenu ? "Return" : "Add User";
  };

  const onChangeSearchString = (event) => {
    setSearchString(event.target.value);
  };

  const options = [];

  const [arrAgents] = useContext(AgentAAndQAContext);
  {
    arrAgents.map((agent) =>
      options.push({ label: agent.name, id: agent.agent_id })
    );
  }

  const [value, setValue] = useState(null);
  const onChangeValue = (newValue) => {
    setValue(newValue);
  };

  const [, , changeSelectedAgent] = useContext(AgentAAndQAContext);
  return (
    <div className="aglm-menu-container">
      {window.localStorage.getItem("userType") === "Admin" && (
        <button onClick={onChangeAddUserMenu} className="aglm-add">
          {getBtnString()}
        </button>
      )}
      <div className="aglm-search-container">
        {/*<input
          className="aglm-search"
          id="aglm-search"
          type="search"
          placeholder={t("placeholder")}
          onClick={() => saveClick(`${INPUT_NAME} input`)}
          onKeyDown={saveKeys}
          onChange={onChangeSearchString}
          value={searchString}
      /> */}
        <Autocomplete
          disablePortal
          className="aglm-search"
          id="aglm-search"
          options={options}
          value={value}
          onClick={() => saveClick(`${INPUT_NAME} input`)}
          onKeyDown={saveKeys}
          onChange={(event, newValue) => {
            setValue(newValue);
            //onChangeSearchString(newValue.label);
            console.log(newValue.id);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className="text-field"
              id="text-field"
              label={t("Agents")}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AgentListMenu;
