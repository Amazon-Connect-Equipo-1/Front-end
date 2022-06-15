/*
ConfirmationPolice.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/05/2022
Last modification date: 10/06/2022

Component that displays the confirmation data of the Police service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import toast from "react-hot-toast";
import { saveKeys, saveClick } from "../MonitorModule.js";

const ConfirmationPolice = (props) => {
  const INPUT_NAME = "police confirmation";

  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("clientEmail");
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
    window.localStorage.removeItem("clientEmail");
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

    fetch(
      process.env.REACT_APP_ENDPOINT_BACK_END + "tps/sendService",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        toast.success("Data submited successfully");
      })
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
                saveClick(`${INPUT_NAME} confirm button`);
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
              saveClick(`${INPUT_NAME} submit button`);
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
