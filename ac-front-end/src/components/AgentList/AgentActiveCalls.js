/*
AgentActiveCalls.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750145 Miguel Ángel Pérez López
- A01750185 Amy Murakami Tsutsumi

Creation date: 02/05/2022
Last modification date: 10/06/2022

Program that displays agents who are on an active call.
*/

//Import Modules
import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import { v4 as uuidv4 } from "uuid";

//Create const Agent Active Calls
const AgentActiveCalls = (props) => {
  // Language
  const { t } = useTranslation();

  //Logic to generate the rows
  const [arrAgents] = useContext(AgentAAndQAContext);

  const arrAgentsWorking = arrAgents.filter((agent) => {
    return agent.status === "In call";
  });

  return (
    <div className="aal-main-container">
      <p className="aal-title">{t("activeCalls")}</p>
      {/* <div> */}
      {arrAgentsWorking.length > 0 &&
        arrAgentsWorking.map((agent) => (
          <AgentRow
            key={uuidv4()}
            name={agent.name}
            isActiveCalls={props.isActiveCalls}
            profile_picture={agent.profile_picture}
            status={agent.status}
          />
        ))}
      {arrAgentsWorking.length === 0 && (
        <p className="no-active-agents">{t("noActiveCalls")}</p>
      )}
      {/* </div> */}
    </div>
  );
};

export default AgentActiveCalls;
