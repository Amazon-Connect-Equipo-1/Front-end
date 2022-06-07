/* Recordings Suppliers
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//Create agetn recordings context
export const AgentRecordingsContext = createContext();

// Language

const AgentRecordingsSupplier = ({ children }) => {
  const { t } = useTranslation();
  const dummyRec = [
    {
      id: 1,
      agent: 11,
      agent_name: "Jim Halpert",
      tags: ["lost-card", "cancel-card"],
      miniatureURL: "http://amazon.aws.com/videominiature1",
      videoURL: "http://amazon.aws.com/video1",
      rating: 4,
      date: "02/12/2022",
    },
    {
      id: 2,
      agent: 12,
      agent_name: "Dwight Schrute",
      tags: ["card-declined"],
      miniatureURL: "http://amazon.aws.com/videominiature2",
      videoURL: "http://amazon.aws.com/video2",
      rating: 5,
      date: "02/12/2022",
    },
    {
      id: 3,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["credit-card", "inssurance"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 4,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["withdrawal", "loans"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 5,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 6,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 7,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 8,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 9,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 10,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 11,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
    {
      id: 12,
      agent: 13,
      agent_name: "Michael Scott",
      tags: ["problem-solved", "investments"],
      miniatureURL: "http://amazon.aws.com/videominiature3",
      videoURL: "http://amazon.aws.com/video3",
      rating: 2,
      date: "02/12/2022",
    },
  ];

  //Recordings Array
  const [arrRecordings, setArrRecordings] = useState(dummyRec);

  const [selectedVideoInfo, setSelectedVideoInfo] = useState();

  const getRecordsByAgent = (event) => {
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");

    const myHeadersToken = new Headers();
    myHeadersToken.append("Authorization", `Bearer ${token}`);

    const requestOptionsGET = {
      method: "GET",
      headers: myHeadersToken,
    };

    fetch(
      `https://backtest.bankonnect.link/manager/agentRecordings?email=${email}`,
      requestOptionsGET
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(resultJSON);
        setArrRecordings([...resultJSON]);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => getRecordsByAgent(), []);

  return (
    <AgentRecordingsContext.Provider
      value={[
        arrRecordings,
        getRecordsByAgent,
        selectedVideoInfo,
        setSelectedVideoInfo,
      ]}
    >
      {children}
    </AgentRecordingsContext.Provider>
  );
};

export default AgentRecordingsSupplier;
