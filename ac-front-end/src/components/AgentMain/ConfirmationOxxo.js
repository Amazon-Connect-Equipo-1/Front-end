/*
ConfirmationOxxo.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
traduction:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/05/2022
Last modification date: 10/06/2022

Component that displays the confirmation data of the Oxxo service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import { useTranslation } from "react-i18next";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";
import toast from "react-hot-toast";

const ConfirmationOxxo = (props) => {
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("email");
  const cellphone = window.localStorage.getItem("cellphone");
  const clientLocation = window.localStorage.getItem("clientLocation");

  const street = window.localStorage.getItem("street");
  const state = window.localStorage.getItem("state");
  const colony = window.localStorage.getItem("colony");
  const zipCode = window.localStorage.getItem("zipCode");
  const country = window.localStorage.getItem("country");
  const quantity = window.localStorage.getItem("quantity");
  const accountNumber = window.localStorage.getItem("accountNumber");
  const reference = window.localStorage.getItem("reference");
  const securityToken = window.localStorage.getItem("securityToken");
  const timestamp = window.localStorage.getItem("timestamp");

  //--------------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");

    window.localStorage.removeItem("street");
    window.localStorage.removeItem("state");
    window.localStorage.removeItem("colony");
    window.localStorage.removeItem("zipCode");
    window.localStorage.removeItem("country");
    window.localStorage.removeItem("quantity");
    window.localStorage.removeItem("accountNumber");
    window.localStorage.removeItem("reference");
    window.localStorage.removeItem("securityToken");
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
      service: "Oxxo",
      service_data: {
        client: client,
        client_email: email,
        client_cellphone: cellphone,
        client_location: clientLocation,
        oxxo_address: {
          street: street,
          state: state,
          colony: colony,
          zip_code: zipCode,
          country: country,
        },
        quantity: quantity,
        account_number: accountNumber,
        reference: reference,
        security_token: securityToken,
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
                e.preventDefault();
                pruebaBackTPS();
                restart();
                props.onChange();
              }}
            >
              {t("return")}
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
            <p>{t("oxxoInfo")}</p>
            <p>
              {t("street")}
              <span className="tp-confirmation-text">{street}</span>
            </p>
            <p>
              {t("state")}
              <span className="tp-confirmation-text">{state}</span>
            </p>
            <p>
              {t("colony")}
              <span className="tp-confirmation-text">{colony}</span>
            </p>
            <p>
              {t("zipCode")}
              <span className="tp-confirmation-text">{zipCode}</span>
            </p>
            <p>
              {t("country")}
              <span className="tp-confirmation-text">{country}</span>
            </p>
            <p>
              {t("quantity")}
              <span className="tp-confirmation-text">{quantity}</span>
            </p>
            <p>
              {t("accountNumber")}
              <span className="tp-confirmation-text">{accountNumber}</span>
            </p>
            <p>
              {t("reference")}
              <span className="tp-confirmation-text">{reference}</span>
            </p>
          </div>
          <button
            className="tp-submit-button"
            onClick={(e) => {
              e.preventDefault();
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
export default ConfirmationOxxo;
