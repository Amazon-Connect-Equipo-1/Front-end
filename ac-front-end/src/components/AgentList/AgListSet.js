/*
AgentListSet.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01379868 Jared Abraham Flores Guarneros

Creation date: 01/04/2022
Last modification date: 04/05/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentList/AgListSet.css";
import AgentListMenu from "./AgentListMenu";
import AgentListSetting from "./AgentListSetting";
import { useTranslation } from "react-i18next";

const AgListSet = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <div className="al-main-container">
      <AgentListMenu />
      <div className="al-sub-container">
        <div className="al-card-container">
          <p className="al-title">{t("alwayShow")}</p>
          <div className="al-divider"></div>
          <AgentListSetting setting={"Active Calls"} />
          <AgentListSetting setting={"All Agents"} />
          <AgentListSetting setting={"Online Agents"} />
          <AgentListSetting setting={"Offline Agents"} />
        </div>
        <div className="al-card-container-transparent"></div>
      </div>
    </div>
  );
};
export default AgListSet;
