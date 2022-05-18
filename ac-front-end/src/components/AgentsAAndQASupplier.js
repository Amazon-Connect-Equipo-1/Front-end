import { createContext, useState } from "react";

//Create recordings context
export const AgentAAndQAContext = createContext();

const AgentsAAndQASupplier = ({ children }) => {
  //For testing Ill create dummy recordings
  const dummyAgents = [
    {
      id: 1,
      agentName: "Jim Halpert",
      description: "He is a good guy",
      working: true,
    },
    {
      id: 2,
      agentName: "Dwight Schrute",
      description: "He is a bad guy",
      working: false,
    },
    {
      id: 3,
      agentName: "Pam Beesly",
      description: ":)",
      working: true,
    },
  ];

  //Recordings Array
  const [arrAgents, setArrAgents] = useState(dummyAgents);

  const getAllAgents = () => {
    //Petition to obtain all videos miniatures
  };

  const getAgent = (videoId) => {};

  return (
    <AgentAAndQAContext.Provider value={[arrAgents]}>
      {children}
    </AgentAAndQAContext.Provider>
  );
};

export default AgentsAAndQASupplier;
