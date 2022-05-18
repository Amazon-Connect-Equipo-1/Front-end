import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";

const OxxoForm = (props) => {
  return (
    <div>
      <div className="tp-title">Oxxo Service</div>
      <form>
        <label className="tp-name-label">
          Client:
          <input type="text" className="tp-input-label" />
        </label>
        <label className="tp-name-label">
          Email:
          <input type="text" className="tp-input-label" />
        </label>
        <label className="tp-name-label">
          Cellphone:
          <input type="text" className="tp-input-label" />
        </label>
        <label className="tp-name-label">
          Client location:
          <input type="text" className="tp-input-label" />
        </label>
        <label className="tp-name-label">
          Quantity:
          <input type="text" className="tp-input-label" />
        </label>
        <label className="tp-name-label">
          Account Number:
          <input type="text" className="tp-input-label" />
        </label>
        <div className="tp-submit">
          <input type="submit" value="Ask for service" />
        </div>
      </form>
    </div>
  );
};
export default OxxoForm;
