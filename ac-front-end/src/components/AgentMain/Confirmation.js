/*
Confirmation.js

Authors:
- A01379868 Jared Abraham Flores Guarneros

Creation date: 10/06/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import { useTranslation } from "react-i18next";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const Confirmation = (props) => {
  const recordByAgent = (event) => {
    //const email = window.localStorage.getItem("email");
    //const token = window.localStorage.getItem("token");
    const email = "luiszamarripam@bankonnect.link";
    const token =
      "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNzZjNTE4Ni00ZGMxLTQxMjItOWYwOS02NmYwNTVmZGU4NmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzMWM3NmVkMC0yODI2LTRkNWEtYjk2OC0yNWI1NjdmZDE0MzAiLCJldmVudF9pZCI6ImJjMWY4ZTgxLTBjOTYtNDJiMC1iZDQ3LWI2ZTQ3MDhiZDc0YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0NjU0NzYsImV4cCI6MTY1NDU1MTg3NiwiaWF0IjoxNjU0NDY1NDc2LCJqdGkiOiJmZGZhNTViMC0wOTAxLTRmNTktODllZC1kNGVkZGIzMmE5YmYiLCJ1c2VybmFtZSI6ImQ3NmM1MTg2LTRkYzEtNDEyMi05ZjA5LTY2ZjA1NWZkZTg2YSJ9.q7gub9jyn5ZPVWq6ddK0sdy7fQPPEe3dbAf9BMzIY8xTfQJDdoFfZvZrWsfAErntbaVcJBUEFKt5gZ-Pjm1e5iE9Y-Kkdq7PKWjsnogAtRpx1AhrAiEssxxPJDV3SvcLUBYV0_V5vT39RytsfDt7rnNh4k3uqjoKXlJINtbmFB5A3NtNx7sUfHToJ10F2vFLOt0nCfCxn2wchgQo5Xc2IyudX6V3HQ0MhQFAYDvp4HNYdrVrLOHE1bk8dRQyST7jkUqsxyMv3TClZrD1-d7doytZ3QmfpWBss4_-poxzdR9wAScRzKXuKxjZvW0WsvXej2NS-yyii0enXoyHqm_7IQ";

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
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => console.log("error", error));
  };

  const recordByTag = (event) => {
    const email = "luiszamarripam@bankonnect.link";
    const token =
      "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNzZjNTE4Ni00ZGMxLTQxMjItOWYwOS02NmYwNTVmZGU4NmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzMWM3NmVkMC0yODI2LTRkNWEtYjk2OC0yNWI1NjdmZDE0MzAiLCJldmVudF9pZCI6ImJjMWY4ZTgxLTBjOTYtNDJiMC1iZDQ3LWI2ZTQ3MDhiZDc0YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0NjU0NzYsImV4cCI6MTY1NDU1MTg3NiwiaWF0IjoxNjU0NDY1NDc2LCJqdGkiOiJmZGZhNTViMC0wOTAxLTRmNTktODllZC1kNGVkZGIzMmE5YmYiLCJ1c2VybmFtZSI6ImQ3NmM1MTg2LTRkYzEtNDEyMi05ZjA5LTY2ZjA1NWZkZTg2YSJ9.q7gub9jyn5ZPVWq6ddK0sdy7fQPPEe3dbAf9BMzIY8xTfQJDdoFfZvZrWsfAErntbaVcJBUEFKt5gZ-Pjm1e5iE9Y-Kkdq7PKWjsnogAtRpx1AhrAiEssxxPJDV3SvcLUBYV0_V5vT39RytsfDt7rnNh4k3uqjoKXlJINtbmFB5A3NtNx7sUfHToJ10F2vFLOt0nCfCxn2wchgQo5Xc2IyudX6V3HQ0MhQFAYDvp4HNYdrVrLOHE1bk8dRQyST7jkUqsxyMv3TClZrD1-d7doytZ3QmfpWBss4_-poxzdR9wAScRzKXuKxjZvW0WsvXej2NS-yyii0enXoyHqm_7IQ";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      tags: ["problem-solved"],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/filterRecordings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => console.log("error", error));
  };
  const recordByDate = (event) => {
    const email = "luiszamarripam@bankonnect.link";
    const token =
      "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNzZjNTE4Ni00ZGMxLTQxMjItOWYwOS02NmYwNTVmZGU4NmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzMWM3NmVkMC0yODI2LTRkNWEtYjk2OC0yNWI1NjdmZDE0MzAiLCJldmVudF9pZCI6ImJjMWY4ZTgxLTBjOTYtNDJiMC1iZDQ3LWI2ZTQ3MDhiZDc0YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0NjU0NzYsImV4cCI6MTY1NDU1MTg3NiwiaWF0IjoxNjU0NDY1NDc2LCJqdGkiOiJmZGZhNTViMC0wOTAxLTRmNTktODllZC1kNGVkZGIzMmE5YmYiLCJ1c2VybmFtZSI6ImQ3NmM1MTg2LTRkYzEtNDEyMi05ZjA5LTY2ZjA1NWZkZTg2YSJ9.q7gub9jyn5ZPVWq6ddK0sdy7fQPPEe3dbAf9BMzIY8xTfQJDdoFfZvZrWsfAErntbaVcJBUEFKt5gZ-Pjm1e5iE9Y-Kkdq7PKWjsnogAtRpx1AhrAiEssxxPJDV3SvcLUBYV0_V5vT39RytsfDt7rnNh4k3uqjoKXlJINtbmFB5A3NtNx7sUfHToJ10F2vFLOt0nCfCxn2wchgQo5Xc2IyudX6V3HQ0MhQFAYDvp4HNYdrVrLOHE1bk8dRQyST7jkUqsxyMv3TClZrD1-d7doytZ3QmfpWBss4_-poxzdR9wAScRzKXuKxjZvW0WsvXej2NS-yyii0enXoyHqm_7IQ";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      user_email: email,
      date: "2022-06-06",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/filterRecordingsByDate",
      requestOptions
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

  return (
    <div className="tp-confirmation">
      <div className="tp-title">{t("serviceConfirmation")}</div>
      <button onClick={recordByAgent}>{t("agentBtn")}</button>
      <button onClick={recordByTag}>{t("tags")}</button>
    </div>
  );
};
export default Confirmation;
