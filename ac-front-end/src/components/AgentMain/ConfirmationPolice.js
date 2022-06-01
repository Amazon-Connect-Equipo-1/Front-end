/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const ConfirmationPolice = (props) => {
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("email");
  const cellphone = window.localStorage.getItem("cellphone");
  const clientLocation = window.localStorage.getItem("clientLocation");
  const clientLocationReference = window.localStorage.getItem(
    "clientLocationReference"
  );
  const clientStatement = window.localStorage.getItem("clientStatement");

  const folio = window.localStorage.getItem("folio");
  const timestamp = window.localStorage.getItem("timestamp");

  //--------------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");

    window.localStorage.removeItem("folio");
    window.localStorage.removeItem("timestamp");
  };

  const [conf, setConf] = useState("no");
  const changeConfig = () => {
    setConf("yes");
  };
  const pruebaBackTPS = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Report",
      service_data: {
        client: client,
        client_email: email,
        client_cellphone: cellphone,
        client_location: clientLocation,
        client_location_reference: clientLocationReference,
        client_statement: clientStatement,
        folio: folio,
        timestamp: timestamp,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/tps/sendService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        Service Confirmation
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">Informacion Enviada!</div>
            <div className="tp-confirmation-button-container">
              <button
                className="tp-confirmation-button"
                onClick={(e) => {
                  e.preventDefault();
                  pruebaBackTPS();
                  restart();
                  props.onChange();
                }}
              >
                confirmado
              </button>
            </div>
          </div>
        )}
        {conf === "no" && (
          <div>
            <div className="tp-confirmation-text">
              Client: {client}
              <br />
              mail: {email}
              <br />
              Cellphone: {cellphone}
              <br />
              Client location: {clientLocation}
              <br />
              Client location reference: {clientLocationReference}
              <br />
              Client statement: {clientStatement}
              <br />
            </div>
            <div className="tp-confirmation-button-container">
              <button
                className="tp-confirmation-button"
                onClick={(e) => {
                  e.preventDefault();
                  changeConfig();
                }}
              >
                Mandar info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConfirmationPolice;
