import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";

const UberEatsForm = (props) => {
  return (
    <div>
      <div className="tp-title">Uber Eats Service</div>
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
          Order:
          <input type="text" className="tp-input-label" />
        </label>
        <div className="tp-submit">
          <input type="submit" value="Ask for service" />
        </div>
      </form>
    </div>
  );
};
export default UberEatsForm;
