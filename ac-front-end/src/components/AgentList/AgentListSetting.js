/*
AgentListSettings.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01379868 Jared Abraham Flores Guarneros

Creation date: 04/05/2022
Last modification date: 04/05/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentList/AgListSet.css";
import "../../styles/AgentList/AgentListSwitch.css";
import AgentListSwitch from "./AgentListSwitch";
import { useState } from "react";

//Creates the constant Agent List Settings
const AgentListSetting = (props) => {
  return (
    <div className="al-settings">
      {props.setting}
      <AgentListSwitch />
    </div>
  );
};
export default AgentListSetting;
