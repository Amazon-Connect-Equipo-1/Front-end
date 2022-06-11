/* Oxxo Form
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ConfirmationOxxo from "./ConfirmationOxxo";
//Creates Oxxo Form
const OxxoForm = (props) => {
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [accountInput, setAccountInput] = useState("");

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
  const quantityChangeHandler = (event) => {
    window.localStorage.setItem("quantity", event.target.value);
  };
  const accountNumberChangeHandler = (event) => {
    window.localStorage.setItem("accountNumber", event.target.value);
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");
    window.localStorage.removeItem("quantity");
    window.localStorage.removeItem("accountNumber");
    window.localStorage.removeItem("street");
    window.localStorage.removeItem("state");
    window.localStorage.removeItem("colony");
    window.localStorage.removeItem("zipCode");
    window.localStorage.removeItem("country");
    window.localStorage.removeItem("accountNumber");
    window.localStorage.removeItem("reference");
    window.localStorage.removeItem("securityToken");
    window.localStorage.removeItem("timestamp");
  };

  //--------------------------------------------
  const INPUT_NAME = "Oxxo form";

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

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
  const askOxxo = (event) => {
    const client = window.localStorage.getItem("client");
    const email = window.localStorage.getItem("email");
    const cellphone = window.localStorage.getItem("cellphone");
    const clientLocation = window.localStorage.getItem("clientLocation");
    const quantity = window.localStorage.getItem("quantity");
    const accountNumber = window.localStorage.getItem("accountNumber");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Oxxo", //CONSTANTE
      service_data: {
        client: client,
        email: email,
        cellphone: cellphone,
        client_location: clientLocation,
        quantity: quantity,
        account_number: accountNumber,
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0", //NO SE SABE COMO OBTENER AUN
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
        window.localStorage.setItem(
          "street",
          resultJSON.body.oxxo_address.street
        );
        window.localStorage.setItem(
          "state",
          resultJSON.body.oxxo_address.state
        );
        window.localStorage.setItem(
          "colony",
          resultJSON.body.oxxo_address.colony
        );
        window.localStorage.setItem(
          "zipCode",
          resultJSON.body.oxxo_address.zip_code
        );
        window.localStorage.setItem(
          "country",
          resultJSON.body.oxxo_address.country
        );
        window.localStorage.setItem("reference", resultJSON.body.reference);
        window.localStorage.setItem(
          "security_token",
          resultJSON.body.security_token
        );
        window.localStorage.setItem("timestamp", resultJSON.body.timestamp);
      })
      .catch((error) => console.log("error", error));
  };
  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationOxxo onChange={DisConfirm} />
      </div>
    );
  }
  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">{t("oxxo")}</div>
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
            {t("cellPhone")}
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
            {t("clientLocation")}
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
            {t("quantity")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setQuantityInput(e.target.value);
                quantityChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("accountNumber")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setAccountInput(e.target.value);
                accountNumberChangeHandler(e.target.value);
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
                quantityInput === "" ||
                accountInput === ""
              }
              style={{
                opacity:
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput &&
                  quantityInput &&
                  accountInput
                    ? "1.0"
                    : "0.5",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askOxxo();
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
export default OxxoForm;
