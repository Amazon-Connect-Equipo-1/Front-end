/* 
index.js

Authors:
- A01378688 Daniel Garcia Barajas
- A01750145 Miguel Ángel Pérez López

Creation date: 10/04/2022
Last modification date: 09/06/2022

Program that renders the main component of the application 
*/

//Import Modules
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticationProvider from "./components/Authentication";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
