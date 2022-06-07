/* Amazon Connect
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "amazon-connect-streams";
import "../../styles/AgentMain/AmazonConnect.css";
import ThirdParty from "./ThirdParty";
import { createContext, Suspense, useEffect, useState } from "react";
import EmbedConnect from "../AmazonConnect/EmbedConnect";

const AmazonConnect = (props) => {
  const [auth, setAuth] = useState("");

  const onChangeAuth = (newAuth) => {
    setAuth(newAuth);
    console.log(auth);
  };
  return (
    <div className="ac-main-container">
      <p className="ac-title">Amazon Connect</p>
      <div className="ac-viewer">
        <EmbedConnect onChangeAuth={onChangeAuth} />
      </div>
      <p className="ac-client-var">{auth}</p>
    </div>
  );
};
export default AmazonConnect;
