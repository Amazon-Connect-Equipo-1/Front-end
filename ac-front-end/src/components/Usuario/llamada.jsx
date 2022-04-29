import "../../styles/Usuario/Usuario.css";
import logo from "../../images/logo_bbva.png";
import Chatbots from "./Chatbots";
import PopLlamada from "./PopLlamada";

const Llamada = (props) => {
  if (props.data) {
    return (
      <div>
        <div>
          <span className="usuario-chatbot">
            <PopLlamada />
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Chatbots />
    </div>
  );
};
export default Llamada;
