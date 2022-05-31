/* Uber Eats Form
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import ThirdParty from "./ThirdParty";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { GiSodaCan } from "react-icons/gi";
import Order from "./Order";
import { useState } from "react";
import ConfirmationUberEats from "./ConfirmationUberEats";

const UberEatsForm = (props) => {
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

  //-----------------------------------------
  const INPUT_NAME = "Uber Eats form";
  const [solconf, setSolConf] = useState("no");
  const Confirm = () => {
    setSolConf("yes");
  };
  const DisConfirm = () => {
    setSolConf("no");
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

    fetch("http://35.88.250.238:8080/tps/askService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const sodaForm = () => {
    setSoda(soda + 1);
  };
  const chipsForm = () => {
    setChips(chips + 1);
  };
  const coffeeForm = () => {
    setCoffee(coffee + 1);
  };
  const hotDogForm = () => {
    setHotDog(hotDog + 1);
  };
  const aspirinForm = () => {
    setAspirin(aspirin + 1);
  };
  const chocolateForm = () => {
    setChocolate(chocolate + 1);
  };

  if (solconf === "yes") {
    return (
      <div>
        <ConfirmationUberEats onChange={DisConfirm} />
      </div>
    );
  }
  if (solconf === "no") {
    return (
      <div>
        <div className="tp-title">Uber Eats Service</div>
        <form>
          <label className="tp-name-label">
            Client:
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
            Email:
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
            Cellphone:
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
            Client location:
            <input
              type="text"
              onKeyDown={saveKeys}
              onClick={() => saveClick(`${INPUT_NAME} input`)}
              className="tp-input-label"
              onChange={clientLocationChangeHandler}
              value={clientLocation}
            />
          </label>
          <h1>Order:</h1>
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
              onKeyDown={saveKeys}
              onClick={(e) => {
                e.preventDefault();
                askUberEats();
                Confirm();
                saveClick(`${INPUT_NAME} input`);
              }}
              value="Ask for service"
              className="tp-submit-button"
            />
          </div>
        </form>
      </div>
    );
  }
};
export default UberEatsForm;
