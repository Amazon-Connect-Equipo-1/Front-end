/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const ConfirmationUber = (props) => {
  const token = window.localStorage.getItem("token");
  //Data----------------------------------------
  const rider = window.localStorage.getItem("rider");
  const model = window.localStorage.getItem("model");
  const plate = window.localStorage.getItem("plate");
  const color = window.localStorage.getItem("color");
  const arrivalTime = window.localStorage.getItem("arrivalTime");
  const rideTime = window.localStorage.getItem("rideTime");
  const url = window.localStorage.getItem("url");
  const timestamp = window.localStorage.getItem("timestamp");

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
      service: "Uber",
      service_data: {
        client: "Miguel Perez",
        client_email: "A01379868@tec.mx",
        client_cellphone: "+525530323376",
        rider: "Daniel Barajas",
        car: {
          model: "Nissan Versa",
          color: "Red",
          plate: "IEEE-10-11",
        },
        client_location: "Mundo E",
        destination: "Plaza Carso",
        arrival_time: 10,
        ride_time: 20,
        url: "http://uber.example.link.com/ride",
        timestamp: "2022-05-30 15:16:53.006495",
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
            <div className="tp-confirmation-text"></div>
            <div className="tp-confirmation-button-container">
              <button
                className="tp-confirmation-button"
                onClick={(e) => {
                  e.preventDefault();
                  pruebaBackTPS();
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
              client: {props.client}
              <br />
              email: {props.email}
              <br />
              cellphone: {props.cellphone}
              <br />
              client location: {props.clientLocation}
              <br />
              client destination: {props.destination}
              <br />
              rider: {rider}
              <br />
              car model: {model}
              <br />
              car plate: {plate}
              <br />
              car color: {color}
              <br />
              arrival time: {arrivalTime}
              <br />
              ride time: {rideTime}
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
export default ConfirmationUber;
