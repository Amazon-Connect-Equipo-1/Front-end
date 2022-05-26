/* Oxxo Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
//Creates Oxxo Form
const OxxoForm = (props) => {
  const SendService = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxYzc0Yjk5ZC02NWQzLTRiOWItOGZjNi1lNDc2NDViZDRiNmYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiI2ZDI4ZmE0Mi00ZTMxLTQxM2EtODhjZC01YWFmOGM2NDE4NDAiLCJldmVudF9pZCI6IjY1Y2FhZTVmLTJkZGItNDUyMC1hY2RhLTg0NTZiZDZlODBiMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTM2MDA0MjYsImV4cCI6MTY1MzY4NjgyNiwiaWF0IjoxNjUzNjAwNDI2LCJqdGkiOiI1OTlhMzNlMy00YjdmLTRkYmMtYTQ3MC0yNGFkNmU1MWRhYzUiLCJ1c2VybmFtZSI6IjFjNzRiOTlkLTY1ZDMtNGI5Yi04ZmM2LWU0NzY0NWJkNGI2ZiJ9.rBtUYlflwoqzFFpAAfCZSGWGiMkPdIAIN7tmtyIbSH3h1XQqwYhefmAU4C7nUkCzEuJtzX9QXLJ2EaiQW0I1y6c9QIviiKP0ljsG6dAyjwn1JqK_EaTFxWvwE1vHDcciQVAUOQYabVh16-r4eqzP0PNTF2Cx2FIXAY5n0LQgrygPR1PiBxknyU-ih0Q1Fy3E5FICrUKLDLx-FOzJ4Fs54sit6RghVEOHuxmU5f0ZZi67X-ER57ZqRq_e2rk__BenaLph6mZChOid0kTEJfIF2SqshcY67-dMQWxrOcdFmePbAxyXmx4u6FEfSxkR1MJjeEUetBWyDVO94xdXaXO-ew", //Token de autorizacion--------
      },
      body: JSON.stringify({
        service: "Oxxo",
        service_data: {
          client_id: 1234,
          client: "Dwight Schrute",
          email: "DSchrute@dunderMifflin.com",
          cellphone: "+525530323376",
          client_location: "Alfredo's Pizza Cafe",
          quantity: 501,
          account_number: 6969696969,
        },
      }),
    };
    fetch("https://35.88.250.238:8443/tps/askService", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState()); //Guardar los los datos
  };

  const INPUT_NAME = "Oxxo form";

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="tp-title">Oxxo Service</div>
      <form>
        <label className="tp-name-label">
          Client:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="client"
          />
        </label>
        <label className="tp-name-label">
          Email:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="email"
          />
        </label>
        <label className="tp-name-label">
          Phone number:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="phoneNumber"
          />
        </label>
        <label className="tp-name-label">
          Client's location:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="clientLocation"
          />
        </label>
        <label className="tp-name-label">
          Quantity:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="quantity"
          />
        </label>
        <label className="tp-name-label">
          Account number:
          <input
            type="text"
            onKeyDown={saveKeys}
            onClick={() => saveClick(`${INPUT_NAME} input`)}
            className="tp-input-label"
            id="accountNumber"
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
export default OxxoForm;
