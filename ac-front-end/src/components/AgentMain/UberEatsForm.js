/* Uber Eats Form
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { GiSodaCan } from "react-icons/gi";
import Order from "./Order";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ConfirmationUberEats from "./ConfirmationUberEats";

const UberEatsForm = (props) => {
  const { t } = useTranslation();
  //input handlers-----------------------------------
  const [clientInput, setClientInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [item, setItem] = useState(0);

  const clientChangeHandler = (event) => {
    window.localStorage.setItem("client", event.target.value);
  };
  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
  };
  const cellphoneChangeHandler = (event) => {
    window.localStorage.setItem("cellphone", event.target.value);
  };
  const clientLocationChangeHandler = (event) => {
    window.localStorage.setItem("clientLocation", event.target.value);
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("cellphone");
    window.localStorage.removeItem("clientLocation");
    window.localStorage.removeItem("destination");
    window.localStorage.removeItem("rider");
    window.localStorage.removeItem("model");
    window.localStorage.removeItem("plate");
    window.localStorage.removeItem("color");
    window.localStorage.removeItem("arrivalTime");
    window.localStorage.removeItem("rideTime");
    window.localStorage.removeItem("url");
    window.localStorage.removeItem("timestamp");
  };

  //--------------------------------------------
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
  const token = window.localStorage.getItem("token");

  const askUberEats = (event) => {
    const client = window.localStorage.getItem("client");
    const email = window.localStorage.getItem("email");
    const cellphone = window.localStorage.getItem("cellphone");
    const clientLocation = window.localStorage.getItem("clientLocation");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "UberEats", //CONSTANTE
      service_data: {
        client: client,
        email: email,
        cellphone: cellphone,
        client_location: clientLocation,
        order: {
          refresco: { price: 15, quantity: soda },
          papas: { price: 20, quantity: chips },
          cafe: { price: 10, quantity: coffee },
          hotdog: { price: 5, quantity: hotDog },
          aspirina: { price: 25, quantity: aspirin },
          chocolates: { price: 10, quantity: chocolate },
        },
      },
      call_id: "192810a0-0sop-ori3-p210-ospem309e0", //NI  IDEA
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
      .catch((error) => console.log("error", error));
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
              onChange={(e) => {
                setClientInput(e.target.value);
                clientChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("email")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setEmailInput(e.target.value);
                emailChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("cellPhone")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setCellphoneInput(e.target.value);
                cellphoneChangeHandler(e.target.value);
              }}
            />
          </label>
          <label className="tp-name-label">
            {t("clientLocation")}
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={(e) => {
                setLocationInput(e.target.value);
                clientLocationChangeHandler(e.target.value);
              }}
            />
          </label>
          <h1>{t("order")}</h1>
          <div className="tp-order">
            <Order product={t("soda")} quantity={soda} function={sodaForm} />
            <Order product={t("chips")} quantity={chips} function={chipsForm} />
            <Order
              product={t("coffee")}
              quantity={coffee}
              function={coffeeForm}
            />
            <Order
              product={t("hotDog")}
              quantity={hotDog}
              function={hotDogForm}
            />
            <Order
              product={t("aspirin")}
              quantity={aspirin}
              function={aspirinForm}
            />
            <Order
              product={t("chocolate")}
              quantity={chocolate}
              function={chocolateForm}
            />
          </div>

          <div className="tp-submit">
            <input
              type="submit"
              disabled={
                clientInput === "" ||
                emailInput === "" ||
                cellphoneInput === "" ||
                locationInput === "" ||
                item < 0
              }
              style={{
                opacity:
                  clientInput &&
                  emailInput &&
                  cellphoneInput &&
                  locationInput &&
                  (soda > 0 || chips > 0 || coffee > 0 || hotDog > 0)
                    ? "1.0"
                    : "0.5",
              }}
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUberEats();
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
