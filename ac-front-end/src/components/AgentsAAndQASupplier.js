/* AgentsAAndQASupplier
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { use } from "i18next";
import { createContext, useState } from "react";

import { useTranslation } from "react-i18next";

//Create recordings context
export const AgentAAndQAContext = createContext();

const AgentsAAndQASupplier = ({ children }) => {
  //For testing Ill create dummy recordings
  // Language
  const { t } = useTranslation();
  const dummyAgents = [
    {
      id: 1,
      agentName: "Jim Halpert",
      description: t("goodComment"),
      working: true,
    },
    {
      id: 2,
      agentName: "Dwight Schrute",
      description: t("badComment"),
      working: false,
    },
    {
      id: 3,
      agentName: "Pam Beesly",
      description: ":)",
      working: true,
    },
    {
      id: 5,
      agent: 13,
      agentName: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best Boss!",
      working: true,
    },
    {
      id: 6,
      agent: 13,
      agentName: "Brad Pitt",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best ...!",
      working: true,
    },
    {
      id: 7,
      agent: 13,
      agentName: "Michael Phelps",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best swimmer!",
      working: false,
    },
    {
      id: 8,
      agent: 13,
      agentName: "Tyler Joseph",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best singer!",
      working: true,
    },
    {
      id: 9,
      agent: 13,
      agentName: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best Boss!",
      working: false,
    },
    {
      id: 10,
      agent: 13,
      agentName: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best Boss!",
      working: true,
    },
    {
      id: 11,
      agent: 13,
      agentName: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best Boss!",
      working: true,
    },
    {
      id: 12,
      agent: 13,
      agentName: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
      description: "The best Boss!",
      working: true,
    },
  ];

  //Recordings Array
  const [arrAgents, setArrAgents] = useState(dummyAgents);
  const [selectedAgent, setSelectedAgent] = useState(arrAgents[0]); //needs a function if arr is not empty show the first one

  const getAllAgents = () => {
    //Petition to obtain all videos miniatures
  };

  const getAgent = (videoId) => {};

  const changeSelectedAgent = (id) => {
    //verify if list is not empty
    const agentInfo = arrAgents.filter((agent) => agent.id === id);
    console.log(agentInfo);
    setSelectedAgent(agentInfo[0]);
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
      value={[arrAgents, selectedAgent, changeSelectedAgent, giveFeedback]}
    >
      {children}
    </AgentAAndQAContext.Provider>
  );
};

export default AgentsAAndQASupplier;
