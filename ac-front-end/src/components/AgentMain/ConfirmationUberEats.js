/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const ConfirmationUberEats = (props) => {
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const client = window.localStorage.getItem("client");
  const email = window.localStorage.getItem("email");
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
    window.localStorage.removeItem("email");
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
              Soda: {props.sodaQ}
              <br />
              Chips: {props.chipsQ}
              <br />
              Hot Dog: {props.hotDogQ}
              <br />
              Chocolate: {props.chocolateQ}
              <br />
              Coffee: {props.coffeeQ}
              <br />
              Aspirin: {props.aspirinQ}
              <br />
              Total: {total}
              <br />
              Delivery Name: {deliveryName}
              <br />
              Delivery Time: {deliveryTime}
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
export default ConfirmationUberEats;
