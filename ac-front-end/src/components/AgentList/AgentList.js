/*
AgentList.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01378688 Daniel Garcia Barajas
- A01750145 Miguel Ángel Pérez López

Creation date: 02/05/2022
Last modification date: 09/06/2022

Program that displays the interface that contains the screen 
of the invidual agents, the list of agents and the agents that 
are in active calls. 
*/

//Import Modules
import { useContext, useEffect, useState } from "react";
import "../../styles/AgentList/AgentList.css";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import AddUser from "./AddUser";
import AgentActiveCalls from "./AgentActiveCalls";
import AgentListMenu from "./AgentListMenu";
import AllAgentList from "./AllAgentsList";
import SingleAgent from "./SingleAgent";

//Create Constant Agent List
const AgentList = (props) => {
  //Logic to generate the rows
  const [arrAgents, , changeSelectedAgent] = useContext(AgentAAndQAContext);

  //This info is for the agent card
  const [agentInfo, setAgentInfo] = useState(arrAgents[0]);
  const [addUserMenu, setAddUserMenu] = useState();

  const selectAgentHandler = (agent) => {
    setAgentInfo(agent);
  };

  const onChangeUserCard = (addUserMenu) => {
    addUserMenu ? setAddUserMenu(false) : setAddUserMenu(true);
    console.log(addUserMenu);
  };

  return (
    <div className="agl-main-container" data-aos="fade-up">
      <AgentListMenu
        onSelectAgent={changeSelectedAgent}
        changeCard={onChangeUserCard}
      />
      <div
        className="agl-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {!addUserMenu && <SingleAgent agent={agentInfo} />}
        {addUserMenu && <AddUser />}
        <AllAgentList onSelectAgent={selectAgentHandler} isActiveCalls={true} />
        <AgentActiveCalls isActiveCalls={false} />
      </div>
    </div>
  );
};

export default AgentList;
