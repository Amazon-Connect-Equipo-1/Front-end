/* O
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { useTranslation } from "react-i18next";
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

    fetch("https://backtest.bankonnect.link/tps/sendService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  // Language
  const { t } = useTranslation();

  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        {t("serviceConfirmation")}
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">{t("informationSent")}</div>
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
                {t("confirmed")}
              </button>
            </div>
          </div>
        )}
        {conf === "no" && (
          <div>
            <div className="tp-confirmation-text">
              {t("client")} {client}
              <br />
              {t("email")} {email}
              <br />
              {t("cellPhone")} {cellphone}
              <br />
              {t("clientLocation")} {clientLocation}
              <br />
              {t("clientLocationReference")} {clientLocationReference}
              <br />
              {t("clientStatement")} {clientStatement}
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
                {t("sendInfo")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConfirmationPolice;
