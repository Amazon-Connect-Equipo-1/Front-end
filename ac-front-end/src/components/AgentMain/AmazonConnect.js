/*
AmazonConnect.js

Authors:
- A01378688 Daniel Garcia Barajas
- A01749448 Jorge Chávez Badillo

Creation date: 19/05/2022
Last modification date: 09/06/2022

Component that embeds the EmbedConnect component.
*/

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

  const [clientId, setClientId] = useState("");

  const onChangeClientId = (newClientId) => {
    setClientId(newClientId);
  };
  return (
    <div className="ac-main-container">
      <p className="ac-title">Amazon Connect</p>
      <div className="ac-viewer">
        <EmbedConnect
          onChangeAuth={onChangeAuth}
          onChangeClientId={onChangeClientId}
        />
      </div>
      <p className="ac-client-var">{auth}</p>
      <p className="ac-client-var">{clientId}</p>
    </div>
  );
};
export default AmazonConnect;
