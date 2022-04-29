import "../../styles/Usuario/Usuario.css";
import logo from "../../images/logo_bbva.png";
const Chatbots = (props) => {
  return (
    <div>
      <span className="usuario-chatbot">
        <iframe
          className="chatbot"
          src="https://d2c72ljk85v2ia.cloudfront.net/index.html"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </span>
    </div>
  );
};
export default Chatbots;
