import "../../styles/AgentList/AgListSet.css";
import "../../styles/AgentList/AgentListSwitch.css";
import AgentListSwitch from "./AgentListSwitch";
import { useState } from "react";
const AgentListSetting = (props) => {
  return (
    <div className="al-settings">
      {props.setting}
      <AgentListSwitch />
    </div>
  );
};
export default AgentListSetting;
