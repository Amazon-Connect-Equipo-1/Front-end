/* Third Party
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
import { createContext, Suspense, useState } from "react";
import UberForm from "./UberForm";
import UberEatsForm from "./UberEatsForm";
import OxxoForm from "./OxxoForm";
import { saveClick } from "../MonitorModule.js";
import PoliceForm from "./PoliceForm";
import { useTranslation } from "react-i18next";

const ThirdParty = (props) => {
  const INPUT_NAME = "agent tutorials";

  const [tps, setTps] = useState("Main");
  //Creates All tpAssing

  const tpAssignUber = () => {
    setTps("Uber");
  };
  const tpAssignUberEats = () => {
    setTps("UberEats");
  };
  const tpAssignOxxo = () => {
    setTps("Oxxo");
  };
  const tpAssignPolice = () => {
    setTps("Police");
  };

  // Language
  const { t } = useTranslation();

  return (
    <>
      {tps === "Main" && (
        <>
          <div className="tp-title">{t("thirdPartyServices")}</div>
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
        </>
      )}
      {tps === "Uber" && <UberForm onChange={setTps} />}
      {tps === "UberEats" && <UberEatsForm onChange={setTps} />}
      {tps === "Oxxo" && <OxxoForm onChange={setTps} />}
      {tps === "Police" && <PoliceForm onChange={setTps} />}
    </>
  );
};

export default ThirdParty;
