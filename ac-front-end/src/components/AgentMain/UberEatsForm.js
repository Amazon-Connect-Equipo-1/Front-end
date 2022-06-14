/*
UberEatsForm.js

Authors:
- A01379868 Jared Abraham Flores Guarneros
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 17/05/2022
Last modification date: 10/06/2022

Component that displays the fields to be filled in by the agent to use the Uber Eats service. 
*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { GiSodaCan } from "react-icons/gi";
import Order from "./Order";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import ConfirmationUberEats from "./ConfirmationUberEats";
import { GlobalContext } from "../GlobalSupplier";
import toast from "react-hot-toast";

const UberEatsForm = (props) => {
  const { t } = useTranslation();
  const [, , , callId] = useContext(GlobalContext);
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [item, setItem] = useState(0);
  //SAVE DATA-----------------------------------
  const SaveData = () => {
    window.localStorage.setItem("client", clientInput);
    window.localStorage.setItem("email", emailInput);
    window.localStorage.setItem("cellphone", cellphoneInput);
    window.localStorage.setItem("clientLocation", locationInput);
  };

  const clientChangeHandler = (event) => {
    setClientInput(event.target.value);
    // window.localStorage.setItem("client", event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
    // window.localStorage.setItem("email", event.target.value);
  };
  const cellphoneChangeHandler = (event) => {
    setCellphoneInput(event.target.value);
    // window.localStorage.setItem("cellphone", event.target.value);
  };
  const clientLocationChangeHandler = (event) => {
    setLocationInput(event.target.value);
    // window.localStorage.setItem("clientLocation", event.target.value);
  };

  const INPUT_NAME = "Uber Eats form";
  const [solconf, setSolConf] = useState("no");
  const Confirm = () => {
    setSolConf("yes");
  };
  const DisConfirm = () => {
    setSolConf("no");
    props.onChange();
  };
  const getBack = () => {
    props.onChange();
  };
  const [soda, setSoda] = useState(0);
  const [chips, setChips] = useState(0);
  const [coffee, setCoffee] = useState(0);
  const [hotDog, setHotDog] = useState(0);
  const [aspirin, setAspirin] = useState(0);
  const [chocolate, setChocolate] = useState(0);

  const askUberEats = (event) => {
    const client = window.localStorage.getItem("client");
    const email = window.localStorage.getItem("email");
    const cellphone = window.localStorage.getItem("cellphone");
    const clientLocation = window.localStorage.getItem("clientLocation");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      service: "UberEats", //CONSTANTE
      service_data: {
        client: clientInput,
        email: emailInput,
        cellphone: cellphoneInput,
        client_location: locationInput,
        order: {
          refresco: { price: 15, quantity: soda },
          papas: { price: 20, quantity: chips },
          cafe: { price: 10, quantity: coffee },
          hotdog: { price: 5, quantity: hotDog },
          aspirina: { price: 25, quantity: aspirin },
          chocolates: { price: 10, quantity: chocolate },
        },
      },
      call_id: callId, //Probaaaar que sirve
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backtest.bankonnect.link/tps/askService", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
        window.localStorage.setItem("total", resultJSON.body.total);
        window.localStorage.setItem(
          "deliveryName",
          resultJSON.body.delivery_name
        );
        window.localStorage.setItem(
          "deliveryTime",
          resultJSON.body.delivery_time
        );
        window.localStorage.setItem("timestamp", resultJSON.body.timestamp);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };

  const sodaForm = () => {
    setSoda(soda + 1);
    setItem(item + 1);
  };
  const chipsForm = () => {
    setChips(chips + 1);
    setItem(item + 1);
  };
  const coffeeForm = () => {
    setCoffee(coffee + 1);
    setItem(item + 1);
  };
  const hotDogForm = () => {
    setHotDog(hotDog + 1);
    setItem(item + 1);
  };
  const aspirinForm = () => {
    setAspirin(aspirin + 1);
    setItem(item + 1);
  };
  const chocolateForm = () => {
    setChocolate(chocolate + 1);
    setItem(item + 1);
  };

  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationUberEats
          onChange={DisConfirm}
          sodaQ={soda}
          chipsQ={chips}
          coffeeQ={coffee}
          hotdogQ={hotDog}
          aspirinQ={aspirin}
          chocolateQ={chocolate}
        />
      </div>
    );
  }

  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">{t("uberEats")}</div>
        <form>
          <label className="tp-name-label">
            {t("client")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientChangeHandler}
              value={clientInput}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="email"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={emailChangeHandler}
              value={emailInput}
            />
          </label>
          <label className="tp-name-label">
            {t("cellPhone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={cellphoneChangeHandler}
              value={cellphoneInput}
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
              value={locationInput}
            />
          </label>
          <h1>{t("order")}</h1>
          <div className="tp-order">
            <Order product={"Soda"} quantity={soda} function={sodaForm} />
            <Order product={"Chips"} quantity={chips} function={chipsForm} />
            <Order product={"Coffee"} quantity={coffee} function={coffeeForm} />
            <Order product={"HotDog"} quantity={hotDog} function={hotDogForm} />
            <Order
              product={"Aspirin"}
              quantity={aspirin}
              function={aspirinForm}
            />
            <Order
              product={"Chocolate"}
              quantity={chocolate}
              function={chocolateForm}
            />
          </div>

          <div className="tp-submit">
            <input
              type="submit"
              style={{
                opacity:
                  emailInput.includes("@") &&
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput
                    ? // &&
                      // (soda > 0 || chips > 0 || coffee > 0 || hotDog > 0)
                      "1.0"
                    : "0.5",
                pointerEvents:
                  emailInput.includes("@") &&
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput
                    ? "all"
                    : "none",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUberEats();
                SaveData();
                Confirm();
                saveClick(`${INPUT_NAME} input`);
              }}
              value={t("askForService")}
              className="tp-submit-button"
            />
          </div>
          <div className="tp-submit">
            <input
              type="submit"
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                getBack();
                saveClick(`${INPUT_NAME} input`);
              }}
              value={t("cancel")}
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default UberEatsForm;
