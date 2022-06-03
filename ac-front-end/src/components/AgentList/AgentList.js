/* Agent List
Authors:
        A01777771 Stephen Strange*/

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
  const [arrAgents] = useContext(AgentAAndQAContext);

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
      <AgentListMenu changeCard={onChangeUserCard} />
      <div
        className="agl-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {!addUserMenu && <SingleAgent agent={agentInfo} />}
        {addUserMenu && <AddUser />}
        <AllAgentList onSelectAgent={selectAgentHandler} isActiveCalls={true} />
        {/* <AgentActiveCalls isActiveCalls={false} /> */}
      </div>
    </div>
  );
};

export default AgentList;
