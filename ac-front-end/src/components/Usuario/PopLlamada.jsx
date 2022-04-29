import "../../styles/Usuario/PopLlamada.css";
import logo from "../../images/logo_bbva.png";
import Chatbots from "./Chatbots";

const PopLlamada = (props) => {
  return (
    <div className="PopLlamada-contenedor">
      <p className="PopLlamada-texto">+1 3824563299</p>
      <div>
        <button className="PopLlamada-boton-left">Cancel</button>
        <button className="PopLlamada-boton-right">Call</button>
      </div>
    </div>
  );
};
export default PopLlamada;
