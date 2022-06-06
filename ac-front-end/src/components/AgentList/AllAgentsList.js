/* All Agent List
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/AllAgentsList.css";
import AgentRow from "./AgentRow";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import { v4 as uuidv4 } from "uuid";

const AllAgentList = (props) => {
  const allAgents = (event) => {
    //---------------------------------------------AGENTES EN LINEA, DESCONECTADOS, EN LLAMADA
    const token =
      "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNzZjNTE4Ni00ZGMxLTQxMjItOWYwOS02NmYwNTVmZGU4NmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzMWM3NmVkMC0yODI2LTRkNWEtYjk2OC0yNWI1NjdmZDE0MzAiLCJldmVudF9pZCI6ImJjMWY4ZTgxLTBjOTYtNDJiMC1iZDQ3LWI2ZTQ3MDhiZDc0YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0NjU0NzYsImV4cCI6MTY1NDU1MTg3NiwiaWF0IjoxNjU0NDY1NDc2LCJqdGkiOiJmZGZhNTViMC0wOTAxLTRmNTktODllZC1kNGVkZGIzMmE5YmYiLCJ1c2VybmFtZSI6ImQ3NmM1MTg2LTRkYzEtNDEyMi05ZjA5LTY2ZjA1NWZkZTg2YSJ9.q7gub9jyn5ZPVWq6ddK0sdy7fQPPEe3dbAf9BMzIY8xTfQJDdoFfZvZrWsfAErntbaVcJBUEFKt5gZ-Pjm1e5iE9Y-Kkdq7PKWjsnogAtRpx1AhrAiEssxxPJDV3SvcLUBYV0_V5vT39RytsfDt7rnNh4k3uqjoKXlJINtbmFB5A3NtNx7sUfHToJ10F2vFLOt0nCfCxn2wchgQo5Xc2IyudX6V3HQ0MhQFAYDvp4HNYdrVrLOHE1bk8dRQyST7jkUqsxyMv3TClZrD1-d7doytZ3QmfpWBss4_-poxzdR9wAScRzKXuKxjZvW0WsvXej2NS-yyii0enXoyHqm_7IQ";

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
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => console.log("error", error));
  };

  // Language
  const { t } = useTranslation();

  //Logic to generate the rows
  const [arrAgents] = useContext(AgentAAndQAContext);

  //Selected agent for showing in SingleAgent component
  const [, , changeSelectedAgent] = useContext(AgentAAndQAContext);

  return (
    <div className="aal-main-container">
      <p className="aal-title">{t("allAgents")}</p>
      <div>
        {arrAgents.map((agent) => (
          <AgentRow
            id={agent.id}
            key={uuidv4()}
            agentName={agent.agentName}
            isActiveCalls={props.isActiveCalls}
            isWorking={agent.working}
            onSelectAgent={changeSelectedAgent}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAgentList;
