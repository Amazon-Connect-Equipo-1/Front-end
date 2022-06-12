/*
UberForm.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López

Creation date: 17/05/2022
Last modification date: 10/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useContext, useState } from "react";
import ConfirmationUber from "./ConfirmationUber";
import { GlobalContext } from "../GlobalSupplier";

const UberForm = (props) => {
  const [, , , callId] = useContext(GlobalContext);
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  //SAVE DATA-----------------------------------
  const SaveData = () => {
    window.localStorage.setItem("client", clientInput);
    window.localStorage.setItem("email", emailInput);
    window.localStorage.setItem("cellphone", cellphoneInput);
    window.localStorage.setItem("clientLocation", locationInput);
    window.localStorage.setItem("destination", destinationInput);
  };

  const clientChangeHandler = (event) => {
    setClientInput(event.target.value);
    // window.localStorage.setItem("client", event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
    // window.localStorage.setItem("email", event.target.value);
  };
  const cellphoneChangeHandler = (event) => {
    setCellphoneInput(event.target.value);
    // window.localStorage.setItem("cellphone", event.target.value);
  };
  const clientLocationChangeHandler = (event) => {
    setLocationInput(event.target.value);
    // window.localStorage.setItem("clientLocation", event.target.value);
  };
  const destinationChangeHandler = (event) => {
    setDestinationInput(event.target.value);
    // window.localStorage.setItem("destination", event.target.value);
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
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Uber", //CONSTANTE
      service_data: {
        client: clientInput,
        email: emailInput,
        cellphone: cellphoneInput,
        client_location: locationInput,
        destination: destinationInput,
      },
      call_id: callId, //probar si sirve
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backtest.bankonnect.link/tps/askService", requestOptions)
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
            {t("client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientChangeHandler}
              value={clientInput}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="email"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={emailChangeHandler}
              value={emailInput}
            />
          </label>
          <label className="tp-name-label">
            {t("cellPhone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={cellphoneChangeHandler}
              value={cellphoneInput}
            />
          </label>
          <label className="tp-name-label">
            {t("clientLocation")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientLocationChangeHandler}
              value={locationInput}
            />
          </label>
          <label className="tp-name-label">
            {t("clientDestination")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={destinationChangeHandler}
              value={destinationInput}
            />
          </label>
          <div className="tp-submit">
            <input
              type="submit"
              style={{
                opacity:
                  emailInput.includes("@") &&
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput &&
                  destinationInput
                    ? "1.0"
                    : "0.5",
                pointerEvents:
                  emailInput.includes("@") &&
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput &&
                  destinationInput
                    ? "all"
                    : "none",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUber();
                SaveData();
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
              value={t("cancel")}
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default UberForm;
