/*
ConfirmationUber.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/05/2022

Component that displays the confirmation data of the Uber service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { saveKeys, saveClick } from "../MonitorModule.js";

const ConfirmationUber = (props) => {
  const INPUT_NAME = "Uber confirmation";

  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("clientEmail");
  const cellphone = window.localStorage.getItem("cellphone");
  const clientLocation = window.localStorage.getItem("clientLocation");
  const destination = window.localStorage.getItem("destination");
  const rider = window.localStorage.getItem("rider");
  const model = window.localStorage.getItem("model");
  const plate = window.localStorage.getItem("plate");
  const color = window.localStorage.getItem("color");
  const arrivalTime = window.localStorage.getItem("arrivalTime");
  const rideTime = window.localStorage.getItem("rideTime");
  const url = window.localStorage.getItem("url");
  const timestamp = window.localStorage.getItem("timestamp");

  //--------------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("clientEmail");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");
    window.localStorage.removeItem("destination");
    window.localStorage.removeItem("rider");
    window.localStorage.removeItem("model");
    window.localStorage.removeItem("plate");
    window.localStorage.removeItem("color");
    window.localStorage.removeItem("arrivalTime");
    window.localStorage.removeItem("rideTime");
    window.localStorage.removeItem("url");
    window.localStorage.removeItem("timestamp");
  };

  //--------------------------------------------
  const [conf, setConf] = useState("no");
  const changeConfig = () => {
    setConf("yes");
  };
  const pruebaBackTPS = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Uber",
      service_data: {
        client: client,
        client_email: email,
        client_cellphone: cellphone,
        rider: rider,
        car: {
          model: model,
          color: color,
          plate: plate,
        },
        client_location: clientLocation,
        destination: destination,
        arrival_time: arrivalTime,
        ride_time: rideTime,
        url: url,
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
                e.preventDefault();
                saveClick(`${INPUT_NAME} confirmation button`);
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
              {t("clientDestination")}
              <span className="tp-confirmation-text">{destination}</span>
            </p>
            <p>
              {t("driver")}
              <span className="tp-confirmation-text">{rider}</span>
            </p>
            <p>
              {t("carModel")}
              <span className="tp-confirmation-text">{model}</span>
            </p>
            <p>
              {t("carPlate")}
              <span className="tp-confirmation-text">{plate}</span>
            </p>
            <p>
              {t("carColor")}
              <span className="tp-confirmation-text">{color}</span>
            </p>
            <p>
              {t("arrivalTime")}
              <span className="tp-confirmation-text">{arrivalTime}</span>
            </p>
            <p>
              {t("rideTime")}
              <span className="tp-confirmation-text">{rideTime}</span>
            </p>
          </div>
          <button
            className="tp-submit-button"
            onClick={(e) => {
              e.preventDefault();
              saveClick(`${INPUT_NAME} send information button`);
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
export default ConfirmationUber;
