/*
ConfirmationUberEats.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/05/2022
Last modification date: 10/06/2022

Component that displays the confirmation data of the UberEats service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { saveKeys, saveClick } from "../MonitorModule.js";

const ConfirmationUberEats = (props) => {
  const INPUT_NAME = "Oxxo confirmation";
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("clientEmail");
  const cellphone = window.localStorage.getItem("cellphone");
  const clientLocation = window.localStorage.getItem("clientLocation");

  const total = window.localStorage.getItem("total");
  const deliveryTime = window.localStorage.getItem("deliveryTime");
  const deliveryName = window.localStorage.getItem("deliveryName");
  const timestamp = window.localStorage.getItem("timestamp");

  //--------------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("clientEmail");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");
    window.localStorage.removeItem("total");
    window.localStorage.removeItem("deliveryTime");
    window.localStorage.removeItem("deliveryName");
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
      service: "UberEats",
      service_data: {
        client: client,
        client_email: email,
        client_cellphone: cellphone,
        client_location: cellphone,
        order: {
          refresco: { price: 15, quantity: props.sodaQ },
          papas: { price: 20, quantity: props.chipsQ },
          cafe: { price: 10, quantity: props.coffeeQ },
          hotdog: { price: 5, quantity: props.hotDogQ },
          aspirina: { price: 25, quantity: props.aspirinQ },
          chocolates: { price: 10, quantity: props.chocolateQ },
        },
        total: total,
        delivery_name: deliveryName,
        delivery_time: deliveryTime,
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
        toast.success(t("dataSubmitted"));
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
                // e.preventDefault();
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
            <div className="tp-order-list">
              {t("order")}
              {props.sodaQ > 0 && (
                <div>
                  {t("soda")} {props.sodaQ}
                </div>
              )}

              {props.chipsQ > 0 && (
                <div>
                  {t("chips")} {props.chipsQ}
                </div>
              )}

              {props.hotdogQ > 0 && (
                <div>
                  {t("hotDog")} {props.hotdogQ}
                </div>
              )}

              {props.chocolateQ > 0 && (
                <div>
                  {t("chocolate")}
                  {props.chocolateQ}
                </div>
              )}

              {props.coffeeQ > 0 && (
                <div>
                  {t("coffee")} {props.coffeeQ}
                </div>
              )}

              {props.aspirinQ > 0 && (
                <div>
                  {t("aspirin")}
                  {props.aspirinQ}
                </div>
              )}
            </div>
            <p>
              {t("total")}
              <span className="tp-confirmation-text">{total}</span>
            </p>
            <p>
              {t("deliveryName")}
              <span className="tp-confirmation-text">{deliveryName}</span>
            </p>
            <p>
              {t("deliveryTime")}
              <span className="tp-confirmation-text">{deliveryTime}</span>
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
export default ConfirmationUberEats;
