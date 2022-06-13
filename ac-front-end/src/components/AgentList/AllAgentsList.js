/*
AllAgentsList.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 02/05/2022
Last modification date: 09/06/2022

Program that displays a list of all the agents with a profile picture 
and an indicator of their status. 
*/

//Import Modules
import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import { v4 as uuidv4 } from "uuid";

const AllAgentList = (props) => {
  // Language
  const { t } = useTranslation();

  //Logic to generate the rows
  const [arrAgents] = useContext(AgentAAndQAContext);

  //Selected agent for showing in SingleAgent component
  const [, , changeSelectedAgent] = useContext(AgentAAndQAContext);

  return (
    <div className="aal-main-container">
      <p className="aal-title">{t("allAgents")}</p>
      <div className="aal-rows-container">
        {arrAgents.map((agent) => (
          <AgentRow
            id={agent.agent_id}
            key={uuidv4()}
            name={agent.name}
            // isActiveCalls={props.isActiveCalls}
            // isWorking={agent.working}
            onSelectAgent={changeSelectedAgent}
            profile_picture={agent.profile_picture}
            status={agent.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAgentList;
