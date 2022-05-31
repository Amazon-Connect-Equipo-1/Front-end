/* Uber Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { createContext, Suspense, useState } from "react";
import ConfirmationUber from "./ConfirmationUber";

const UberForm = (props) => {
  //input handlers-----------------------------------
  const [client, setClient] = useState("");
  const clientChangeHandler = (event) => {
    setClient(event.target.value);
  };
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const [cellphone, setCellphone] = useState("");
  const cellphoneChangeHandler = (event) => {
    setCellphone(event.target.value);
  };
  const [clientLocation, setClientLocation] = useState("");
  const clientLocationChangeHandler = (event) => {
    setClientLocation(event.target.value);
  };
  const [destination, setDestination] = useState("");
  const destinationChangeHandler = (event) => {
    setDestination(event.target.value);
  };

  //-----------------------------------------
  const [solconf, setSolConf] = useState("no");
  const Confirm = () => {
    setSolConf("yes");
  };
  const DisConfirm = () => {
    setSolConf("no");
    props.onChange();
  };
  const token =
    "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxYzc0Yjk5ZC02NWQzLTRiOWItOGZjNi1lNDc2NDViZDRiNmYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiI2ZjIzOTNmNS1mN2U2LTQ1YzMtYjdiOS1kMzRkNzBiMTU3OGIiLCJldmVudF9pZCI6IjUxMjk4NzlkLTI5ZjItNGE3Ni05OTQxLTAzMDQxOWQ2ZjQwNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQwMjc1NzksImV4cCI6MTY1NDExMzk3OSwiaWF0IjoxNjU0MDI3NTc5LCJqdGkiOiJjMGQzMDBjNi1mYTJiLTQ4NTUtYjViZS1mOTkyODAwMTQzMDAiLCJ1c2VybmFtZSI6IjFjNzRiOTlkLTY1ZDMtNGI5Yi04ZmM2LWU0NzY0NWJkNGI2ZiJ9.da8M-g6wCX-d9wy0p83sJ53JBIoAqeVOZwt86SCXkDglTEKlx7APC4_kYnBRh87NjNMTRAFp8h7tJb0Hy2vr3sLP3A-dvvYdGRNJYyNhf8xLqFroOCeHx2LasIA2BypD6Z2aoonObbEJ6r_M89QzClw83oihHl2-UNAPbSLcaV7u5N4bEcfwTnEalYdPPLfCkb-q0UnQijbLav9I5O8IoYnz9neBJv5cwztVRMFh8sC5iJQpxzOOQ5j_V1LSTvXs47t-08L-sCjRSedB_wucOwYWrmxpU7e0SaoY7jVs2TQgH7jvIdt-Pq7V9xwOCCyh-NRTDiNbBMISoNAnHzleKg";
  const INPUT_NAME = "Uber form";
  // Language
  const { t } = useTranslation();
  const askUber = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Uber", //CONSTANTE
      service_data: {
        client: client,
        email: email,
        cellphone: cellphone,
        client_location: clientLocation,
        destination: destination,
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0", //NI IDEA DE DONDE SALE XD
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/tps/askService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationUber onChange={DisConfirm} />
      </div>
    );
  }

  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">{t("uber")}</div>
        <form>
          <label className="tp-name-label">
            {t("client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientChangeHandler}
              value={client}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={emailChangeHandler}
              value={email}
            />
          </label>
          <label className="tp-name-label">
            {t("cellphone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={cellphoneChangeHandler}
              value={cellphone}
            />
          </label>
          <label className="tp-name-label">
            {t("clientLocation")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientLocationChangeHandler}
              value={clientLocation}
            />
          </label>
          <label className="tp-name-label">
            {t("destination")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={destinationChangeHandler}
              value={destination}
            />
          </label>
          <div className="tp-submit">
            <input
              type="submit"
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUber();
                Confirm();
                saveClick(`${INPUT_NAME} input`);
              }}
              value={t("askForService")}
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default UberForm;
