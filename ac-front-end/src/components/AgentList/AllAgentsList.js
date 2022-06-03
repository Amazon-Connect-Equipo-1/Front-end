/* All Agent List
Authors:
        A01777771 Stephen Strange*/

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
      <div>
        {arrAgents.map((agent) => (
          <AgentRow
            id={agent.id}
            key={uuidv4()}
            agentName={agent.agentName}
            isActiveCalls={props.isActiveCalls}
            isWorking={agent.working}
            onSelectAgent={changeSelectedAgent}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAgentList;
