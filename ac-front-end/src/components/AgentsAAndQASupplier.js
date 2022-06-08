/* AgentsAAndQASupplier
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { use } from "i18next";
import { createContext, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

//Create recordings context
export const AgentAAndQAContext = createContext();

const AgentsAAndQASupplier = ({ children }) => {
  //For testing Ill create dummy recordings
  // Language
  const { t } = useTranslation();
  const dummyAgents = [
    {
      agent_id: "1",
      name: "Select one agent",
      description: t("goodComment"),
      status: true,
    },
  ];

  const getAllAgentsList = (event) => {
    //---------------------------------------------AGENTES EN LINEA, DESCONECTADOS, EN LLAMADA
    const token = window.localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptionsGET = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(
      "https://backtest.bankonnect.link/manager/agentList",
      requestOptionsGET
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result).agents;
        console.log(resultJSON);
        setArrAgents([...resultJSON]);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => getAllAgentsList(), []);

  //Recordings Array
  const [arrAgents, setArrAgents] = useState(dummyAgents);
  const [selectedAgent, setSelectedAgent] = useState(...dummyAgents); //needs a function if arr is not empty show the first one
  console.log("selected agetn", selectedAgent);
  const getAllAgents = () => {
    //Petition to obtain all videos miniatures
  };

  const getAgent = (videoId) => {};

  const changeSelectedAgent = (id) => {
    //verify if list is not empty
    console.log(id);
    const agentInfo = arrAgents.filter((agent) => agent.agent_id === id);
    console.log(agentInfo);
    setSelectedAgent(...agentInfo);
  };

  const giveFeedback = (commentt) => {
    const myHeaders = new Headers();
    const token = window.localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      super_id: window.localStorage.getItem("id"),
      agent_email: "A01750480@tec.mx", //change this to agents email //window.localStorage.getItem("email"),
      comment: commentt,
      rating: 4,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/postComment",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <AgentAAndQAContext.Provider
      value={[
        arrAgents,
        selectedAgent,
        changeSelectedAgent,
        giveFeedback,
        getAllAgentsList,
      ]}
    >
      {children}
    </AgentAAndQAContext.Provider>
  );
};

export default AgentsAAndQASupplier;
