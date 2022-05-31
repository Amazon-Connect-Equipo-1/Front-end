/* Oxxo Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ConfirmationOxxo from "./ConfirmationOxxo";
//Creates Oxxo Form
const OxxoForm = (props) => {
  const INPUT_NAME = "Oxxo form";

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  // Language
  const { t } = useTranslation();
  const [solconf, setSolConf] = useState("no");
  const Confirm = () => {
    setSolConf("yes");
  };
  const DisConfirm = () => {
    setSolConf("no");
    props.onChange();
  };
  const token =
    "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkYzI4MzBhYi0xZGJkLTQ5OTctOWI0Yy1iZmUyODZkZGQyYjYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiIzYjI3ZDdkNS1jZTZmLTQ4OTYtOTgyZC1jMTYzN2ZiM2ExMjYiLCJldmVudF9pZCI6ImU3NjM3YmViLTM5NTgtNDZlNi05ZWFlLTc5ZjZiOWIxNWNlYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTM5MzgwMTAsImV4cCI6MTY1NDAyNDQxMCwiaWF0IjoxNjUzOTM4MDEwLCJqdGkiOiI0ODQ3YTkxNy1hMzZkLTQzMWYtOTZlNy0wNTc4Y2FmZWY2YmIiLCJ1c2VybmFtZSI6ImRjMjgzMGFiLTFkYmQtNDk5Ny05YjRjLWJmZTI4NmRkZDJiNiJ9.7ilihvw-XalwJ39c6WILiETkIB_UIxBJo6coX5SXNMr_zSExJvodAA8qiKUqN5ruPcT8HU69dxCN-t28n3AeyCsU3c6ZRZ0kny2mR8uCWhTTYIlr_FRk3PvaQAjK4bqYKokzS_v9GM2ibxI-nbIP2cwUXAkLCowldZKWL8O9kWuRYW6XtMrIvbgkgm4fp-cATp9vrHuTs5RV7BaU4aFQtqjEg_THoNcxbkM8J3GdMqkRVC09R8rnA6Vot91voqZic3GK9_IJESL6u6r1ZMuKjrns5O9KFXm48Cw-If2R6Bp3KSA-X6F6ucJ_At53GLlMgHwyhjdrhusuo-ZrqWSKvQ";

  const askOxxo = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Oxxo",
      service_data: {
        client: "Rick Sanchez",
        email: "A01379868@tec.mx",
        cellphone: "+525530323376",
        client_location: "shoney's",
        quantity: 1000000,
        account_number: 42069911,
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0",
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
        <ConfirmationOxxo onChange={DisConfirm} />
      </div>
    );
  }
  if (solconf == "no") {
    return (
      <div>
        <div className="tp-title">{t("oxxo")}</div>
        <form>
          <label className="tp-name-label">
            {t("client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
            />
          </label>
          <label className="tp-name-label">
            {t("phone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
            />
          </label>
          <label className="tp-name-label">
            {t("clientLocation")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
            />
          </label>
          <label className="tp-name-label">
            {t("quantity")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
            />
          </label>
          <label className="tp-name-label">
            {t("accountNumber")}
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

                askOxxo();
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
export default OxxoForm;
