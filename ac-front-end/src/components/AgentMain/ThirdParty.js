import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
const ThirdParty = (props) => {
  return (
    <div>
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
};
export default ThirdParty;
