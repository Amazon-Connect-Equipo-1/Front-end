import "../../styles/AgentList/AgentListSwitch.css";
import React from "react";
import { useState } from "react";

const AgentListSwitch = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const check = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="al-switch">
        <input type="checkbox" checked={isChecked} onClick={check} />
        <span className="al-slider" />
      </label>
    </div>
  );
};
export default AgentListSwitch;
