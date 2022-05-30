/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const Confirmation = (props) => {
  const [conf, setConf] = useState("no");
  const changeConfig = () => {
    setConf("yes");
  };
  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        Service Confirmation
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">CONFIRMADO</div>
            <div className="tp-confirmation-button-container">
              <button className="tp-confirmation-button">confirmado</button>
            </div>
          </div>
        )}
        {conf === "no" && (
          <div>
            <div className="tp-confirmation-text">sexo</div>
            <div className="tp-confirmation-button-container">
              <button className="tp-confirmation-button">Regresar</button>
              <button className="tp-confirmation-button" onClick={changeConfig}>
                Mandar info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Confirmation;
