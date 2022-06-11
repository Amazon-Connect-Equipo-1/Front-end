/*
AgentListMenu.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750145 Miguel Ángel Pérez López

Creation date: 02/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentList/AgentListMenu.css";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import { Autocomplete, TextField } from "@mui/material";
import { HiOutlineRefresh } from "react-icons/hi";
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

  const refresh = () => {
    window.location.reload();
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
        <button className="aglm-refresh-btn" onClick={refresh}>
          {t("refresh")}
          <HiOutlineRefresh className="aglm-refresh" />
        </button>
        <Autocomplete
          disablePortal
          className="aglm-search"
          id="aglm-search"
          options={options}
          value={value}
          onClick={() => saveClick(`${INPUT_NAME} input`)}
          onKeyDown={saveKeys}
          onChange={(event, newValue) => {
            console.log("newValue", newValue);
            setValue(newValue);
            props
              .onSelectAgent(newValue.id)
              //onChangeSearchString(newValue.label);
              .console.log(newValue.id);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className="text-field"
              id="text-field"
              label={t("agents")}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AgentListMenu;
