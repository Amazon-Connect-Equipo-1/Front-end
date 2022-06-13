/* 
Authentication.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01379868 Jared Abraham Flores Guarneros

Creation date: 22/05/2022
Last modification date: 08/06/2022

Program that validates if the user exists on the database and allows him/her to sign in. 
*/

//Import Modules
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const logoutPetition = () => {
    const token = window.localStorage.getItem("token");
    const email = window.localStorage.getItem("email");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      email: email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backtest.bankonnect.link/auth/signout", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(resultJSON);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };
  // State for Authentication
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState(null);

  // Login
  const login = (user, password, userType) => {
    setUser(user);
    setPassword(password);
    setUserType(userType);
  };

  // Logout
  const logout = () => {
    logoutPetition();
    setUser(null);
    setPassword(null);
    setUserType(null);
  };

  return (
    <AuthenticationContext.Provider
      value={[user, password, userType, login, logout]}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
