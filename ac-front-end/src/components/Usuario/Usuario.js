/* User verification
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/Usuario/Usuario.css";
import logo from "../../images/logo_bbva.png";
import "../../styles/Login/Login.css";
import Card from "../UI/Card";
import { useState } from "react";

//Verify if the user is on a Call or no
const Usuario = (props) => {
  const [ver, setVer] = useState("no");
  //input handlers-----------------------------------

  const emailChangeHandler = (event) => {
    window.localStorage.setItem("email", event.target.value);
  };
  const codeChangeHandler = (event) => {
    window.localStorage.setItem("code", event.target.value);
  };
  const setVerification = () => {
    setVer("yes");
  };

  //-----------------------------------------
  //RESTART DATA--------------------------------
  const restart = () => {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("code");
  };

  //--------------------------------------------
  const verifyInfo = (event) => {
    const email = window.localStorage.getItem("email");
    const code = window.localStorage.getItem("code");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email, //CONSTANTE
      code: code,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/auth/verify", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(result);
        console.log(resultJSON);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="log-main-container">
      <div className="log-container">
        <img src={logo} alt="logo" className="log-logo" />

        {ver === "no" && (
          <Card className="lgf-main-container">
            <div className="lgf-ver-container ">
              <p className="lgf-form-title">Verify</p>
              <div className="lgf-ver-in-container">
                <p className="lgf-label">Email:</p>
                <input
                  className="lgf-ver-in"
                  onChange={emailChangeHandler}
                ></input>
                <p className="lgf-label">Code:</p>
                <input
                  className="lgf-ver-in"
                  onChange={codeChangeHandler}
                ></input>
                <button
                  className="lgf-ver-sub"
                  onClick={(e) => {
                    e.preventDefault();
                    verifyInfo();
                    restart();
                    setVerification();
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </Card>
        )}
        {ver == "yes" && (
          <Card className="lgf-main-container">
            <div className="lgf-ver-container ">
              <p className="lgf-form-title">Verified!</p>
              <div className="lgf-ver-in-container">
                <div className="lgf-exit-text">
                  Now you can exit this window
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
export default Usuario;
