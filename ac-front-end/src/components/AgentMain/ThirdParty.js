/*
ThirdParty.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
traduction:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 17/05/2022
Last modification date: 17/05/2022

Program that contains the different buttons of the third-party-services.
*/

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

  const tpAssignMain = () => {
    setTps("Main");
  };
  const tpAssignConfirmationUber = () => {
    setTps("ConfirmationUber");
  };
  const tpAssignConfirmationUberEats = () => {
    setTps("ConfirmationUberEats");
  };
  const tpAssignConfirmationOxxo = () => {
    setTps("ConfirmationOxxo");
  };
  const tpAssignConfirmationPolice = () => {
    setTps("ConfirmationPolice");
  };

  // Language
  const { t } = useTranslation();

  return (
    <>
      {tps === "Main" && (
        <div className="tp-container">
          <div className="tp-title">{t("thirdPartyServices")}</div>
          <div className="tp-btn-container">
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
        </div>
      )}

      {tps === "Uber" && <UberForm onChange={tpAssignMain} />}

      {tps === "UberEats" && <UberEatsForm onChange={tpAssignMain} />}

      {tps === "Oxxo" && <OxxoForm onChange={tpAssignMain} />}

      {tps === "Police" && <PoliceForm onChange={tpAssignMain} />}
    </>
  );
};

export default ThirdParty;
