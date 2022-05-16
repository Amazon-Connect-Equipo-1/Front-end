import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";
import { useTranslation } from "react-i18next";


const AllAgentList = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <div className="aal-main-container">
      <p className="aal-title">{t("allAgents")}</p>
      <div>
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
        <AgentRow />
      </div>
    </div>
  );
};

export default AllAgentList;
