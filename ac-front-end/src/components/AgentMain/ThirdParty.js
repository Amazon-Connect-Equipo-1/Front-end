import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
import { createContext, Suspense, useState } from "react";
import UberForm from "./UberForm";
import UberEatsForm from "./UberEatsForm";
import OxxoForm from "./OxxoForm";
import { saveKeys, saveClick } from "../MonitorModule.js";
import PoliceForm from "./PoliceForm";

const ThirdParty = (props) => {
  const INPUT_NAME = "agent tutorials";

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
          <button
            className="tp-button"
            onClick={() => {
              tpAssignUber();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={uberlogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button
            className="tp-button"
            onClick={() => {
              tpAssignUberEats();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={ubereatslogo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button
            className="tp-button"
            onClick={() => {
              tpAssignOxxo();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={oxxologo} className="tp-image" />
          </button>
        </div>
        <div className="tp-button-container">
          <button
            className="tp-button"
            onClick={() => {
              tpAssignPolice();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={policelogo} className="tp-image" />
          </button>
        </div>
      </div>
    );
  }
  if (tps === "Uber") {
    return <UberForm onChange={settps} />;
  }
  if (tps === "UberEats") {
    return <UberEatsForm onChange={settps} />;
  }
  if (tps === "Oxxo") {
    return <OxxoForm onChange={settps} />;
  }
  if (tps === "Police") {
    return <PoliceForm onChange={settps} />;
  }
};

export default ThirdParty;
