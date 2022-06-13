/*
ConfirmationPolice.js

Authors:
- A01379868 Jared Abraham Flores Guarneros

Creation date: 30/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import toast from "react-hot-toast";

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
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
    });
  };
  // Language
  const { t } = useTranslation();

  return (
    <div className="tp-confirmation">
      <div className="tp-title">{t("serviceConfirmation")}</div>
      {conf === "yes" && (
        <div>
          <div className="tp-confirmation-text">{t("informationSent")}</div>
          <div className="tp-confirmation-button-container">
            <button
              className="tp-submit-button"
              onClick={(e) => {
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
        <>
          <div className="tp-confirmation-container">
            <p>
              {t("client")}
              <span className="tp-confirmation-text">{client}</span>
            </p>
            <p>
              {t("email")}
              <span className="tp-confirmation-text">{email}</span>
            </p>
            <p>
              {t("cellPhone")}
              <span className="tp-confirmation-text">{cellphone}</span>
            </p>
            <p>
              {t("clientLocation")}
              <span className="tp-confirmation-text">{clientLocation}</span>
            </p>
            <p>
              {t("clientLocationReference")}
              <span className="tp-confirmation-text">
                {clientLocationReference}
              </span>
            </p>
            <p>
              {t("clientStatement")}
              <span className="tp-confirmation-text">{clientStatement}</span>
            </p>
          </div>

          <button
            className="tp-submit-button"
            onClick={(e) => {
              changeConfig();
            }}
          >
            {t("sendInfo")}
          </button>
        </>
      )}
    </div>
  );
};
export default ConfirmationPolice;
