/* Global Supplier
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import { createContext, useState } from "react";

//Create recordings context
export const GlobalContext = createContext();

const GlobalSupplier = ({ children }) => {
  // State to keep last state in recordings
  const [recordingInfo, setRecordingInfo] = useState({
    id: 1,
    agent: 11,
    agent_name: "Jim Halpert",
    tags: ["Business", "Work", "Theft"],
    minitureURL: "http://amazon.aws.com/videominiature1",
    videoURL: "http://amazon.aws.com/video1",
    rating: 4,
    date: "02/12/2022",
  });

  // Need a petition for this
  const dummyUser = {
    name: "Jim Halpert",
    id: 3005,
    email: "front_end_rocks@hotmail.com",
  };
  // Info of the QA or Admin
  const [userInfo, setUserInfo] = useState(dummyUser);

  //Info when an agent starts a call
  const [callId, setCallId] = useState("");

  //Status of the agent (Active, Inactive, In call)
  //this can be seen in EmbedConnect.js line 155-173
  const [agentStatus, setAgentStatus] = useState("");

  return (
    <GlobalContext.Provider
      value={[
        recordingInfo,
        setRecordingInfo,
        userInfo,
        callId,
        setCallId,
        agentStatus,
        setAgentStatus,
      ]}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalSupplier;
