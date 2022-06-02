/* O
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

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

    fetch("http://35.88.250.238:8080/tps/sendService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        Service Confirmation
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">Informacion Enviada!</div>
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
                confirmado
              </button>
            </div>
          </div>
        )}
        {conf === "no" && (
          <div>
            <div className="tp-confirmation-text">
              Client: {client}
              <br />
              mail: {email}
              <br />
              Cellphone: {cellphone}
              <br />
              Client location: {clientLocation}
              <br />
              OXXO INFO:
              <br />
              Street: {street}
              <br />
              State: {state}
              <br />
              Colony: {colony}
              <br />
              Zip Code: {zipCode}
              <br />
              Country: {country}
              <br />
              Quantity: {quantity}
              <br />
              Account Number: {accountNumber}
              <br />
              Reference: {reference}
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
                Mandar info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConfirmationOxxo;
