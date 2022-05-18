import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";

const UberForm = (props) => {
  return (
    <div>
      <div className="tp-title">Uber Service</div>
      <form>
        <label>
          <div className="tp-name-label">
            Client:
            <input type="text" name="name" className="tp-label" />
          </div>
        </label>
        <label>
          <div className="tp-name-label">
            Email:
            <input type="text" name="name" className="tp-label" />
          </div>
        </label>
        <label>
          <div className="tp-name-label">
            Cellphone:
            <input type="text" name="name" className="tp-label" />
          </div>
        </label>
        <label>
          <div className="tp-name-label">
            Client location:
            <input type="text" name="name" className="tp-label" />
          </div>
        </label>
        <label>
          <div className="tp-name-label">
            Destination:
            <input type="text" name="name" className="tp-label" />
          </div>
        </label>
        <div className="tp-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default UberForm;
