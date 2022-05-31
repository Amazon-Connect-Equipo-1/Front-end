/* Uber Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import ConfirmationUber from "./ConfirmationUber";

const UberForm = (props) => {
  //input handlers-----------------------------------
  const [client, setClient] = useState("");
  const clientChangeHandler = (event) => {
    setClient(event.target.value);
  };
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const [cellphone, setCellphone] = useState("");
  const cellphoneChangeHandler = (event) => {
    setCellphone(event.target.value);
  };
  const [clientLocation, setClientLocation] = useState("");
  const clientLocationChangeHandler = (event) => {
    setClientLocation(event.target.value);
  };
  const [destination, setDestination] = useState("");
  const destinationChangeHandler = (event) => {
    setDestination(event.target.value);
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
        <ConfirmationUber
          onChange={DisConfirm}
          client={client}
          email={email}
          cellphone={cellphone}
          clientLocation={clientLocation}
          destination={destination}
        />
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
              value={client}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={emailChangeHandler}
              value={email}
            />
          </label>
          <label className="tp-name-label">
            {t("cellphone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={cellphoneChangeHandler}
              value={cellphone}
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
              value={clientLocation}
            />
          </label>
          <label className="tp-name-label">
            {t("destination")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={destinationChangeHandler}
              value={destination}
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
        </form>
      </div>
    );
  }
};
export default UberForm;
