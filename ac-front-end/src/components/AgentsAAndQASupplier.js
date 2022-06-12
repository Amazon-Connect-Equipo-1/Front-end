/* 
AgentRecordingsSupplier.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 17/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

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
      name: t("selectAgent"),
      description: "",
      status: true,
    },
  ];

  //Recordings Array
  const [arrAgents, setArrAgents] = useState(dummyAgents);
  const [selectedAgent, setSelectedAgent] = useState(...dummyAgents); //needs a function if arr is not empty show the first one
  // console.log("selected agetn", selectedAgent);

  const changeSelectedAgent = (id) => {
    //verify if list is not empty
    // console.log(id);
    const agentInfo = arrAgents.filter((agent) => agent.agent_id === id);
    // console.log(agentInfo);
    setSelectedAgent(...agentInfo);
  };

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
        // console.log(resultJSON);
        setArrAgents([...resultJSON]);
        if (resultJSON.length > 0) {
          if (selectedAgent.agent_id === "1") {
            setSelectedAgent(resultJSON[0]);
          } else {
            changeSelectedAgent(selectedAgent.agent_id);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const giveFeedback = (commentt, agentEmail, givenRating) => {
    const myHeaders = new Headers();
    const token = window.localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      super_id: window.localStorage.getItem("id"),
      agent_email: agentEmail, //change this to agents email //window.localStorage.getItem("email"),
      comment: commentt,
      rating: givenRating,
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

  useEffect(() => {
    getAllAgentsList();
  }, []);

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
