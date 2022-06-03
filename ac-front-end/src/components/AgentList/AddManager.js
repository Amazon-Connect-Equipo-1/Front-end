import React from "react";
import "../../styles/AgentList/AddUser.css";
import { createContext, Suspense, useState } from "react";

const AddManager = (props) => {
  //input handlers-----------------------------------

  const nameChangeHandler = (event) => {
    window.localStorage.setItem("name", event.target.value);
  };
  const passwordChangeHandler = (event) => {
    window.localStorage.setItem("password", event.target.value);
  };
  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    window.localStorage.setItem("phoneNumber", event.target.value);
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("phoneNumber");
  };

  //--------------------------------------------
  const [role, setRole] = useState();
  const [roleA, setRoleA] = useState("adu-Admin-btn");
  const [roleQ, setRoleQ] = useState("adu-QA-btn");
  const changeConfigRoleA = () => {
    setRoleA("adu-AdminP-btn");
    setRoleQ("adu-QA-btn");
    setRole(true);
  };
  const changeConfigRoleQ = () => {
    setRoleA("adu-Admin-btn");
    setRoleQ("adu-QAP-btn");
    setRole(false);
  };
  const addManager = (event) => {
    const name = window.localStorage.getItem("name");
    const password = window.localStorage.getItem("password");
    const email = window.localStorage.getItem("email");
    const phoneNumber = window.localStorage.getItem("phoneNumber");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      password: password,
      email: email,
      role: role,
      phone_number: phoneNumber,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backtest.bankonnect.link/auth/signUpManager", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="adu-container">
      <p className="adu-title">Add Manager</p>
      <label className="adu-label">Name</label>
      <input
        className="adu-input"
        id="name"
        type="text"
        placeholder="Name"
        onChange={nameChangeHandler}
      />
      <label className="adu-label">Email</label>
      <input
        className="adu-input"
        id="email"
        type="text"
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      <label className="adu-label">Password</label>
      <input
        className="adu-input"
        id="password"
        type="text"
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <label className="adu-label">Phone Number</label>
      <input
        className="adu-input"
        id="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={phoneNumberChangeHandler}
      />
      <div className="adu-role-container">
        <button className={roleA} onClick={changeConfigRoleA}>
          Administrator
        </button>
        <button className={roleQ} onClick={changeConfigRoleQ}>
          QA
        </button>
      </div>

      <button
        className="adu-send-btn"
        onClick={(e) => {
          addManager();
          restart();
          props.onChange();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddManager;
