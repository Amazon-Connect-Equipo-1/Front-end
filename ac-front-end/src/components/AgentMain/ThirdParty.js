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
import Confirmation from "./Confirmation";

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
  const tpAssignConfirmation = () => {
    setTps("Confirmation");
  };
  const tpAssignMain = () => {
    setTps("Main");
  };

  // Language
  const { t } = useTranslation();

  return (
    <>
      {tps === "Main" && (
        <div className="tp-container">
          <div className="tp-title">{t("thirdPartyServices")}</div>
          <button
            className="tp-button"
            onClick={() => {
              tpAssignUber();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={uberlogo} className="tp-image" />
          </button>
          <button
            className="tp-button"
            onClick={() => {
              tpAssignUberEats();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={ubereatslogo} className="tp-image" />
          </button>
          <button
            className="tp-button"
            onClick={() => {
              tpAssignOxxo();
              saveClick(`${INPUT_NAME} button`);
            }}
          >
            <img src={oxxologo} className="tp-image" />
          </button>
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
      )}
      {tps === "Uber" && <UberForm onChange={tpAssignConfirmation} />}
      {tps === "UberEats" && <UberEatsForm onChange={tpAssignConfirmation} />}
      {tps === "Oxxo" && <OxxoForm onChange={tpAssignConfirmation} />}
      {tps === "Police" && <PoliceForm onChange={tpAssignConfirmation} />}
      {tps === "Confirmation" && <Confirmation />}
    </>
  );
};

export default ThirdParty;
