import React from "react";
import "../../styles/AgentList/AddUser.css";

const AddAgent = (props) => {
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
  const superEmailChangeHandler = (event) => {
    window.localStorage.setItem("superEmail", event.target.value);
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("phoneNumber");
    window.localStorage.removeItem("superEmail");
  };

  //--------------------------------------------
  const addAgents = (event) => {
    const name = window.localStorage.getItem("name");
    const password = window.localStorage.getItem("password");
    const email = window.localStorage.getItem("email");
    const phoneNumber = window.localStorage.getItem("phoneNumber");
    const superEmail = window.localStorage.getItem("superEmail");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      super_email: superEmail,
      name: name,
      password: password,
      email: email,
      phone_number: phoneNumber,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/auth/signUpAgent", requestOptions)
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
      <p className="adu-title">Add Agent</p>
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

      <label className="adu-label">Administrator Email</label>
      <input
        className="adu-input"
        id="AdministratorEmail"
        type="text"
        placeholder="Administrator Email"
        onChange={superEmailChangeHandler}
      />
      <button
        className="adu-send-btn"
        onClick={(e) => {
          addAgents();
          restart();
          props.onChange();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddAgent;
