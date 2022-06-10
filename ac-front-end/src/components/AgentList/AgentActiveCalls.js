/* Agent Active Calls
Authors:
        A01777771 Stephen Strange*/

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
