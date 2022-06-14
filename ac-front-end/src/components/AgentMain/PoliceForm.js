/*
PoliceForm.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 17/05/2022
Last modification date: 10/06/2022

Component that displays the fields to be filled in by the agent to use the Police service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import ConfirmationPolice from "./ConfirmationPolice";
import { GlobalContext } from "../GlobalSupplier";
import toast from "react-hot-toast";

//Creates the Police Form
const PoliceForm = (props) => {
  // Language
  const { t } = useTranslation();
  const [solconf, setSolConf] = useState("no");
  const [, , , callId] = useContext(GlobalContext);
  const INPUT_NAME = "police form";
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [referenceInput, setReferenceInput] = useState("");
  const [statementInput, setStatementInput] = useState("");

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
  const clientLocationReferenceChangeHandler = (event) => {
    setReferenceInput(event.target.value);
    // window.localStorage.setItem("clientLocationReference", event.target.value);
  };
  const clientStatementChangeHandler = (event) => {
    setStatementInput(event.target.value);
    // window.localStorage.setItem("clientStatement", event.target.value);
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

  //SAVE DATA-----------------------------------
  const SaveData = () => {
    window.localStorage.setItem("client", clientInput);
    window.localStorage.setItem("email", emailInput);
    window.localStorage.setItem("cellphone", cellphoneInput);
    window.localStorage.setItem("clientLocation", locationInput);
    window.localStorage.setItem("clientStatement", statementInput);
    window.localStorage.setItem("clientLocationReference", referenceInput);
  };

  //--------------------------------------------

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
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Report", //CONSTANTE
      service_data: {
        client: clientInput,
        email: emailInput,
        cellphone: cellphoneInput,
        client_location: locationInput,
        client_location_reference: referenceInput,
        client_statement: statementInput,
      },
      call_id: callId, //SIGO SIN SABER DE DONDE SALE
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.ENDPOINT_BACK_END + "tps/askService", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
        window.localStorage.setItem("folio", resultJSON.body.folio);
        window.localStorage.setItem("timestamp", resultJSON.body.timestamp);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };

  // console.log(emailInput.includes("@"));
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
            {t("clientLocationReference")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientLocationReferenceChangeHandler}
              value={referenceInput}
            />
          </label>
          <label className="tp-name-label">
            {t("clientStatement")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientStatementChangeHandler}
              value={statementInput}
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
                  referenceInput &&
                  statementInput
                    ? "1.0"
                    : "0.5",
                pointerEvents:
                  emailInput.includes("@") &&
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  referenceInput &&
                  statementInput
                    ? "all"
                    : "none",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                askPolice();
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
export default PoliceForm;
