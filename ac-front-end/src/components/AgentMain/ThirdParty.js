import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
import { createContext, Suspense, useState } from "react";
import UberForm from "./UberForm";
import UberEatsForm from "./UberEatsForm";
import OxxoForm from "./OxxoForm";
const ThirdParty = (props) => {
  const [tps, settps] = useState("Main");

  const tpAssignUber = () => {
    settps("Uber");
  };
  const tpAssignUberEats = () => {
    settps("UberEats");
  };
  const tpAssignOxxo = () => {
    settps("Oxxo");
  };
  const tpAssignPolice = () => {
    settps("Police");
  };

  if (tps === "Main") {
    return (
      <div>
        <div className="tp-title">Third Party Services</div>
        <div className="tp-button-container">
          <button className="tp-button" onClick={tpAssignUber}>
            <img src={uberlogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button" onClick={tpAssignUberEats}>
            <img src={ubereatslogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button" onClick={tpAssignOxxo}>
            <img src={oxxologo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button className="tp-button" onClick={tpAssignPolice}>
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
    return <UberEatsForm />;
  }
  if (tps === "Oxxo") {
    return <OxxoForm />;
  }
  if (tps === "Police") {
  }
};

export default ThirdParty;
