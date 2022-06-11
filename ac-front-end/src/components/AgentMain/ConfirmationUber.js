/* O
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

const ConfirmationUber = (props) => {
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("email");
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
    window.localStorage.removeItem("email");
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
              {t("cellPhone")}
              {cellphone}
              <br />
              {t("clientLocation")} {clientLocation}
              <br />
              {t("clientDestination")} {destination}
              <br />
              {t("driver")}
              {rider}
              <br />
              {t("carModel")} {model}
              <br />
              {t("carPlate")}
              {plate}
              <br />
              {t("carColor")}
              {color}
              <br />
              {t("arrivalTime")} {arrivalTime}
              <br />
              {t("rideTime")} {rideTime}
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
export default ConfirmationUber;
