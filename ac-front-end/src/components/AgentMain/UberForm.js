/* Uber Form
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import ConfirmationUber from "./ConfirmationUber";

const UberForm = (props) => {
  //input handlers-----------------------------------

  const clientChangeHandler = (event) => {
    window.localStorage.setItem("client", event.target.value);
  };
  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
  };
  const cellphoneChangeHandler = (event) => {
    window.localStorage.setItem("cellphone", event.target.value);
  };
  const clientLocationChangeHandler = (event) => {
    window.localStorage.setItem("clientLocation", event.target.value);
  };
  const destinationChangeHandler = (event) => {
    window.localStorage.setItem("destination", event.target.value);
  };
  //-----------------------------------------
  const [solconf, setSolConf] = useState("no");
  const Confirm = () => {
    setSolConf("yes");
  };
  const DisConfirm = () => {
    setSolConf("no");
    props.onChange();
  };
  const getBack = () => {
    props.onChange();
  };
  const token = window.localStorage.getItem("token");
  const INPUT_NAME = "Uber form";
  // Language
  const { t } = useTranslation();
  const askUber = (event) => {
    const client = window.localStorage.getItem("client");
    const email = window.localStorage.getItem("email");
    const cellphone = window.localStorage.getItem("cellphone");
    const clientLocation = window.localStorage.getItem("clientLocation");
    const destination = window.localStorage.getItem("destination");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Uber", //CONSTANTE
      service_data: {
        client: client,
        email: email,
        cellphone: cellphone,
        client_location: clientLocation,
        destination: destination,
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0", //NI IDEA DE DONDE SALE XD
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/tps/askService", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const resultJSON = JSON.parse(result);
        console.log(resultJSON);
        window.localStorage.setItem("rider", resultJSON.body.rider);
        window.localStorage.setItem("model", resultJSON.body.car.model);
        window.localStorage.setItem("plate", resultJSON.body.car.plate);
        window.localStorage.setItem("color", resultJSON.body.car.color);
        window.localStorage.setItem(
          "arrivalTime",
          resultJSON.body.arrival_time
        );
        window.localStorage.setItem("rideTime", resultJSON.body.ride_time);
        window.localStorage.setItem("url", resultJSON.body.url);
        window.localStorage.setItem("timestamp", resultJSON.body.timestamp);
      })
      .catch((error) => console.log("error", error));
  };
  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationUber onChange={DisConfirm} />
      </div>
    );
  }

  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">{t("uber")}</div>
        <form>
          <label className="tp-name-label">
            {t("Client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientChangeHandler}
            />
          </label>
          <label className="tp-name-label">
            {t("Email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={emailChangeHandler}
            />
          </label>
          <label className="tp-name-label">
            {t("Cellphone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={cellphoneChangeHandler}
            />
          </label>
          <label className="tp-name-label">
            {t("ClientLocation")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientLocationChangeHandler}
            />
          </label>
          <label className="tp-name-label">
            {t("Destination")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={destinationChangeHandler}
            />
          </label>
          <div className="tp-submit">
            <input
              type="submit"
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUber();
                Confirm();
                saveClick(`${INPUT_NAME} input`);
              }}
              value={t("askForService")}
              className="tp-submit-button"
            />
          </div>
          <div className="tp-submit">
            <input
              type="submit"
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                getBack();
                saveClick(`${INPUT_NAME} input`);
              }}
              value={t("Back")}
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default UberForm;
