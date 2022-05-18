import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
import { createContext, Suspense, useState } from "react";
import UberForm from "./UberForm";
const ThirdParty = (props) => {
  const [tps, settps] = useState("Uber");
  const tpAssign = (service) => {
    settps(service);
  };

  if (tps === "Main") {
    return (
      <div>
        <div className="tp-title">Third Party Services</div>
        <div className="tp-button-container">
          <button className="tp-button">
            <img src={uberlogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button">
            <img src={ubereatslogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button">
            <img src={oxxologo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button">
            <img src={policelogo} className="tp-image" />
          </button>
        </div>
      </div>
    );
  }
  if (tps === "Uber") {
    return <UberForm />;
  }
  if (tps === "UberEats") {
  }
  if (tps === "Oxxo") {
  }
  if (tps === "Police") {
  }
};

export default ThirdParty;
