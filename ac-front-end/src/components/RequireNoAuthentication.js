/* 
RequireAuthentication.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 14/06/2022
Last modification date: 14/06/2022

Program that checks if the user is authenticated to restrict login routes. 
*/

import { Navigate, useLocation } from "react-router-dom";
import About from "./Login/About";
import Login from "./Login/Login";
import NewPasswordForm from "./Login/NewPasswordForm";
import RecoverPassword from "./Login/RecoverPassword";
import Usuario from "./Usuario/Usuario";

const RequireNoAuthentication = ({ allowedUsers }) => {
  const USER = {
    Admin: "Admin",
    QA: "Quality-agent",
    Agent: "Agent",
    Client: "Client",
  };
  var isLoggedIn = false;
  var userType = "";
  if (
    window.localStorage.getItem("isLoggedIn") === null &&
    window.localStorage.getItem("userType") === null
  ) {
    isLoggedIn = false;
    userType = "";
  } else {
    isLoggedIn = window.localStorage.getItem("isLoggedIn");
    userType = window.localStorage.getItem("userType");
  }

  const location = useLocation();
  return isLoggedIn ? (
    <Navigate
      to={
        (userType === USER.Admin && "/admin") ||
        (userType === USER.QA && "/qa") ||
        (userType === USER.Agent && "/agent")
      }
      state={{ from: location }}
      replace
    />
  ) : (
    (location.pathname === "/login" && <Login />) ||
      (location.pathname === "/login/about" && <About />) ||
      (location.pathname === "/forgot-password" && <RecoverPassword />) ||
      (location.pathname === "/confirm-password" && <NewPasswordForm />) ||
      (location.pathname === "/confirm-email" && <Usuario />)
  );
};

export default RequireNoAuthentication;
