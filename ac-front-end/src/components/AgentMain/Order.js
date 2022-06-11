/* O
Authors:
        A01379868 Jared Abraham Flores Guarneros*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import { useTranslation } from "react-i18next";
import uberlogo from "../../images/uber.png";
import ubereatslogo from "../../images/uber-eats.png";
import oxxologo from "../../images/oxxo.jpg";
import policelogo from "../../images/Policia.png";
import {
  GiSodaCan,
  GiChipsBag,
  GiHotDog,
  GiChocolateBar,
} from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { FaPills } from "react-icons/fa";

const Order = (props) => {
  const { t } = useTranslation();
  if (props.product == "Soda") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <GiSodaCan />
        </button>
        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
  if (props.product == "Chips") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <GiChipsBag />
        </button>

        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
  if (props.product == "Coffee") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <BiCoffeeTogo />
        </button>

        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
  if (props.product == "HotDog") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <GiHotDog />
        </button>

        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
  if (props.product == "Aspirin") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <FaPills />
        </button>

        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
  if (props.product == "Chocolate") {
    return (
      <div>
        <button
          className="tp-order-button"
          onClick={(e) => {
            e.preventDefault();
            props.function();
          }}
        >
          <GiChocolateBar />
        </button>

        <div>
          {props.product} {t("quantity")} {props.quantity}
        </div>
      </div>
    );
  }
};
export default Order;
