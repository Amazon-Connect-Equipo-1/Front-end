import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";

const UberForm = (props) => {
  const INPUT_NAME = "Uber form";

  return (
    <div>
      <div className="tp-title">Uber Service</div>
      <form>
        <label className="tp-name-label">
          Client:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
          />
        </label>
        <label className="tp-name-label">
          Email:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
          />
        </label>
        <label className="tp-name-label">
          Cellphone:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
          />
        </label>
        <label className="tp-name-label">
          Client location:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
          />
        </label>
        <label className="tp-name-label">
          Destination:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
          />
        </label>
        <div className="tp-submit">
          <input
            type="submit"
            onKeyDown={saveKeys}
            onClick={(e) => {
              e.preventDefault();
              props.onChange("Main");
              saveClick(`${INPUT_NAME} input`);
            }}
            value="Ask for service"
            className="tp-submit-button"
          />
        </div>
      </form>
    </div>
  );
};
export default UberForm;
