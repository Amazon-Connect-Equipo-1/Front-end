/* 
LoginForm.js

Authors:
- A01750145 Miguel Ángel Pérez López
traduction:
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi
- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 26/05/2022
Last modification date: 08/06/2022

Program that displays the form to log in.
*/

// Import Modules
import Card from "../UI/Card";
import "../../styles/Login/LoginForm.css";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../Authentication";
import { loadUserPreferences } from "../UserPreferences";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const LoginForm = (props) => {
  console.log(process.env.REACT_APP_ENDPOINT_BACK_END + "auth/signIn");
  // Language
  const { t } = useTranslation();

  // Authentication
  const [user, password, userType, login, logout] = useContext(
    AuthenticationContext
  );

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");

  // USERS
  const USER = {
    Admin: "Admin",
    QA: "Quality-agent",
    Agent: "Agent",
    Client: "Client",
  };

  const navigate = useNavigate();
  const location = useLocation();
  //const from = location.state?.from?.pathname || "/";

  // Attend the event of change in the email input
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  // Attend the event of change in the email input
  const pwdChangeHandler = (event) => {
    setPwd(event.target.value);
  };

  // Attend the click button
  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: pwd,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_ENDPOINT_BACK_END + "auth/signIn",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        window.localStorage.setItem("isLoggedIn", true);
        const resultJSON = JSON.parse(result);
        console.log(resultJSON);
        if (Object.keys(resultJSON).includes("errors")) {
          toast.error(t("validEmailPwd"));
        }
        if (resultJSON.code === "NotAuthorizedException") {
          toast.error(t("failedLoginPassword"));
          console.log("Contraseña incorrecta");
        }
        if (resultJSON.code === "UserNotFoundException") {
          toast.error(t("failedLoginEmail"));
          console.log("Usuario no encontrado");
        }
        window.localStorage.setItem("userType", resultJSON.role);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("token", resultJSON.AccessToken);
        console.log(resultJSON.AccessToken);

        if (resultJSON.role === USER.Admin) {
          const myHeadersToken = new Headers();
          myHeadersToken.append(
            "Authorization",
            `Bearer ${resultJSON.AccessToken}`
          );

          const requestOptionsGET = {
            method: "GET",
            headers: myHeadersToken,
          };

          // Save manager info in local storage
          fetch(
            process.env.REACT_APP_ENDPOINT_BACK_END +
              `manager/managerProfile?email=${email}`,
            requestOptionsGET
          )
            .then((response) => response.text())
            .then((result) => {
              const resultJSON = JSON.parse(result);
              console.log(resultJSON);

              window.localStorage.setItem("name", resultJSON.manager_name);
              window.localStorage.setItem("id", resultJSON.manager_id);
              window.localStorage.setItem(
                "profile_picture",
                resultJSON.profile_picture
              );

              loadUserPreferences(resultJSON.manager_id); // Load user config preferences
              window.localStorage.setItem("music", "pause");
              navigate("/qa", { replace: true });
            })
            .catch((error) => {
              console.log("error", error);
              toast.error(error);
            });
          navigate("/admin", { replace: true });
        }
        if (resultJSON.role === USER.QA) {
          const myHeadersToken = new Headers();
          myHeadersToken.append(
            "Authorization",
            `Bearer ${resultJSON.AccessToken}`
          );

          const requestOptionsGET = {
            method: "GET",
            headers: myHeadersToken,
          };

          // Save manager info in local storage
          fetch(
            process.env.REACT_APP_ENDPOINT_BACK_END +
              `manager/managerProfile?email=${email}`,
            requestOptionsGET
          )
            .then((response) => response.text())
            .then((result) => {
              const resultJSON = JSON.parse(result);
              console.log(resultJSON);
              window.localStorage.setItem("name", resultJSON.manager_name);
              window.localStorage.setItem("id", resultJSON.manager_id);
              window.localStorage.setItem(
                "profile_picture",
                resultJSON.profile_picture
              );

              loadUserPreferences(resultJSON.manager_id); // Load user config preferences
              window.localStorage.setItem("music", "pause");
              navigate("/qa", { replace: true });
            })
            .catch((error) => {
              console.log("error", error);
              toast.error(error);
            });
        }
        if (resultJSON.role === USER.Agent) {
          const myHeadersToken = new Headers();
          myHeadersToken.append(
            "Authorization",
            `Bearer ${resultJSON.AccessToken}`
          );

          const requestOptionsGET = {
            method: "GET",
            headers: myHeadersToken,
          };

          // Save manager info in local storage
          fetch(
            process.env.REACT_APP_ENDPOINT_BACK_END +
              `agent/agentProfile?email=${email}`,
            requestOptionsGET
          )
            .then((response) => response.text())
            .then((result) => {
              const resultJSON = JSON.parse(result);
              console.log(resultJSON);
              // console.log(resultJSON.body);
              window.localStorage.setItem("id", resultJSON.agent_id);
              window.localStorage.setItem(
                "agent_admin_token",
                resultJSON["super_id"]
              );
              window.localStorage.setItem("name", resultJSON.name);
              window.localStorage.setItem("status", resultJSON.status);
              window.localStorage.setItem("calls", resultJSON.calls);
              window.localStorage.setItem("rating", resultJSON.rating);
              window.localStorage.setItem(
                "profile_picture",
                resultJSON.profile_picture
              );
              console.log(result);
              loadUserPreferences(resultJSON.agent_id); // Load user config preferences
              window.localStorage.setItem("music", "pause");
              navigate("/agent", { replace: true });
            })
            .catch((error) => {
              console.log("error", error);
              toast.error(error);
            });
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });

    console.log(user);
    console.log(userType);
    console.log("Submit form is working");
  };

  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(true);

  const togglePassword = () => {
    const typeInput = document.getElementById("lgf-input").type;
    if (typeInput === "password") {
      document.getElementById("lgf-input").type = "text";
      setVisible(true);
      setInvisible(false);
    } else {
      document.getElementById("lgf-input").type = "password";
      setVisible(false);
      setInvisible(true);
    }
  };
  return (
    <Card className="lgf-main-container">
      <div className="lgf-container ">
        <form className="lgf-form" onSubmit={loginSubmitHandler}>
          <p className="lgf-form-title">{t("signIn")}</p>
          <label className="lgf-label lgf-margin-bottom-sm ">Email</label>
          <input
            id="lgf-email"
            type="email"
            className="lgf-input"
            onChange={emailChangeHandler}
            value={email}
          />
          <div className="lgf-flex">
            <label className=" lgf-label lgf-margin-bottom-sm lgf-margin-top-md">
              {t("password")}
            </label>
            <NavLink to="/forgot-password" className="lgf-forgot-text">
              {t("fyp")}
            </NavLink>
          </div>
          <div>
            <input
              type="password"
              id="lgf-input"
              className="lgf-input"
              onChange={pwdChangeHandler}
              value={pwd}
            />
            <span onClick={togglePassword} className="field-icon">
              {visible && <FiEyeOff />}
              {invisible && <FiEye />}
            </span>
          </div>
          <button className="lgf-button">{t("signInBtn")}</button>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
