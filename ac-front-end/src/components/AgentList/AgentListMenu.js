/* Agent List Menu
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/AgentListMenu.css";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const AgentListMenu = (props) => {
  const INPUT_NAME = "agent";
  // Language
  const { t } = useTranslation();

  const [addUserMenu, setAddUserMenu] = useState(false);

  const onChangeAddUserMenu = () => {
    addUserMenu ? setAddUserMenu(false) : setAddUserMenu(true);
    props.changeCard(addUserMenu);
  };

  const getBtnString = () => {
    return addUserMenu ? "Return" : "Add User";
  };

  return (
    <div className="aglm-menu-container">
      {window.localStorage.getItem("userType") === "Admin" && (
        <button onClick={onChangeAddUserMenu} className="aglm-add">
          {getBtnString()}
        </button>
      )}
      <div className="aglm-search-container">
        <input
          className="aglm-search"
          id="aglm-search"
          type="search"
          placeholder={t("placeholder")}
          onClick={() => saveClick(`${INPUT_NAME} input`)}
          onKeyDown={saveKeys}
        />
        <button href="/" className="aglm-search-btn">
          {t("search")}
        </button>
      </div>
    </div>
  );
};

export default AgentListMenu;
