/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const Confirmation = (props) => {
  const token =
    "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxYzc0Yjk5ZC02NWQzLTRiOWItOGZjNi1lNDc2NDViZDRiNmYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzOTg2NDkyYy1mMGU4LTRjNDctYjIyNS0zMmFkNjI0NzYyNjEiLCJldmVudF9pZCI6ImQxM2FkNTJhLTAyNGMtNGJiNS1hZjdiLTk0NmIxYmRkODI1ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTM5MjM1MjMsImV4cCI6MTY1NDAwOTkyMywiaWF0IjoxNjUzOTIzNTIzLCJqdGkiOiI5ZWQ1ODIxNi1hNTZmLTQ4NTItYjE4OC1kNzBmZjhhOTIzOTQiLCJ1c2VybmFtZSI6IjFjNzRiOTlkLTY1ZDMtNGI5Yi04ZmM2LWU0NzY0NWJkNGI2ZiJ9.sHoMYGq35rhb0mqkgieSPi7nvjXwDjzjq0VLodkF9eFhT2NyJSVgsJ05w0G4lwBD9ICuAMh5qAWSo68IWkkBINT5UeJsO9PMdfNexU66tMl8TfzIrbNslXCR9U2XtceBqukbcnnSyQnD25-SUx-ZCL_GlZVp1DW-K2yIDAFoklVkE30xizNUUzQKLGqP2_-Kwb4NvBSHtPL-sWRCLW8SwEyHe7CF2WTB7gLTKJ82mhVuPmulRSo9ZKov0t5ypJkDGuRSItOZnu2876dlYR-_zlWQMg0iTlSnAKL3Ea3rvk4mNNroZWehDD2nHb-Sg6o9p3ligaHK2zxIejorloGRHw";
  const [conf, setConf] = useState("no");
  const changeConfig = () => {
    setConf("yes");
  };
  const pruebaBackTPS = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      service: "Oxxo",
      service_data: {
        client: "Dwight Schrute",
        email: "A01379868@tec.mx",
        cellphone: "+525530323376",
        client_location: "Alfredo's Pizza Cafe",
        oxxo_address: {
          street: "JOSE MA LICEAGA 406 S/N, MORELOS SECC LOMA, 20270",
          state: "Aguascalientes",
          colony: "Aguascalientes",
          zip_code: 20270,
          country: "Mexico",
        },
        quantity: 501,
        account_number: 6969696969,
        reference: "891753",
        security_token: "4605",
        timestamp: "2022-05-30 15:16:53.006495",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      Autorization: `Bearer ${token}`,
    };

    fetch("http://35.88.250.238:8080/tps/sendService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        Service Confirmation
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">Informacion Enviada!</div>
            <div className="tp-confirmation-button-container">
              <button
                className="tp-confirmation-button"
                onClick={pruebaBackTPS}
              >
                confirmado
              </button>
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
