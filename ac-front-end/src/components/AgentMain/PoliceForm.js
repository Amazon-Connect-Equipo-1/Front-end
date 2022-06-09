/* Police From
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Confirmation from "./Confirmation";
import ConfirmationPolice from "./ConfirmationPolice";

//Creates the Police Form
const PoliceForm = (props) => {
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [referenceInput, setReferenceInput] = useState("");
  const [statementInput, setStatementInput] = useState("");

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
  const clientLocationReferenceChangeHandler = (event) => {
    window.localStorage.setItem("clientLocationReference", event.target.value);
  };
  const clientStatementChangeHandler = (event) => {
    window.localStorage.setItem("clientStatement", event.target.value);
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");
    window.localStorage.removeItem("clientLocationReference");
    window.localStorage.removeItem("clientStatement");

    window.localStorage.removeItem("folio");
    window.localStorage.removeItem("timestamp");
  };

  //--------------------------------------------
  const INPUT_NAME = "police form";
  // Language
  const { t } = useTranslation();
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
  const askPolice = (event) => {
    const client = window.localStorage.getItem("client");
    const email = window.localStorage.getItem("email");
    const cellphone = window.localStorage.getItem("cellphone");
    const clientLocation = window.localStorage.getItem("clientLocation");
    const clientLocationReference = window.localStorage.getItem(
      "clientLocationReference"
    );
    const clientStatement = window.localStorage.getItem("clientStatement");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Report", //CONSTANTE
      service_data: {
        client: client,
        email: email,
        cellphone: cellphone,
        client_location: clientLocation,
        client_location_reference: clientLocationReference,
        client_statement: clientStatement,
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0", //SIGO SIN SABER DE DONDE SALE
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
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
        window.localStorage.setItem("folio", resultJSON.body.folio);
        window.localStorage.setItem("timestamp", resultJSON.body.timestamp);
      })
      .catch((error) => console.log("error", error));
  };
  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationPolice onChange={DisConfirm} />
      </div>
    );
  }
  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">{t("police")}</div>
        <form>
          <label className="tp-name-label">
            {t("client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setClientInput(e.target.value);
                clientChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setEmailInput(e.target.value);
                emailChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("cellphone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setCellphoneInput(e.target.value);
                cellphoneChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("client location")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setLocationInput(e.target.value);
                clientLocationChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("client location reference")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setReferenceInput(e.target.value);
                clientLocationReferenceChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("client statement")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setStatementInput(e.target.value);
                clientStatementChangeHandler(e.target.value);
              }}
            />
          </label>
          <div className="tp-submit">
            <input
              type="submit"
              disabled={
                clientInput === "" ||
                emailInput === "" ||
                cellphoneInput === "" ||
                locationInput === "" ||
                referenceInput === "" ||
                statementInput === ""
              }
              style={{
                opacity:
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput &&
                  referenceInput &&
                  statementInput
                    ? "1.0"
                    : "0.5",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();

                askPolice();
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
              value={t("Cancel")}
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default PoliceForm;
