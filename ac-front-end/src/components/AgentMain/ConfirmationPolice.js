/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const ConfirmationPolice = (props) => {
  const token = window.localStorage.getItem("token");
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
        client: "Liam Garay",
        client_email: "A01379868@tec.mx",
        client_cellphone: "+525588656464",
        client_location:
          "Camino de las flores #95 , Avenida Juarez, Estado de MExico, Mexico",
        client_location_reference:
          "Nearby a convienence store, between jilguero and leopoldo streets",
        client_statement:
          "his credit card was stolen, he also was physically assaulted with a wooden bat",
        folio: "rnoysnm-enov-kv9z-2njj-1pa5tyo3ltd10",
        timestamp: "2022-05-30 15:16:53.006495",
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
            <div className="tp-confirmation-text">INFORMACION POLICE</div>
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
