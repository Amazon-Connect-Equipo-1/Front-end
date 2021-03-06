/* 
MonitorModule.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 15/05/2022
Last modification date: 09/06/2022

Program that counts the clicks made in the App. 
*/

import toast from "react-hot-toast";

// This module helps to register the
// clicks and pressed keys of the user
const token = window.localStorage.getItem("token");
export const giveTimestamp = () => {
  const timestamp = Date.now();
  const fecha = new Date(timestamp);
  return fecha;
};

export const saveKeys = (event) => {
  console.log(event.key, giveTimestamp());
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    key: event.target.value,
    agent_id: window.localStorage.getItem("id"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    process.env.REACT_APP_ENDPOINT_BACK_END + "keyclick/addKeystroke",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => {
      console.log("error", error);
      toast.error(error);
    });
};

export const saveClick = (elementName) => {
  console.log(`Click in ${elementName}`, giveTimestamp());
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    button: elementName,
    agent_id: window.localStorage.getItem("id"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    process.env.REACT_APP_ENDPOINT_BACK_END + "keyclick/addClick",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => {
      console.log("error", error);
      toast.error(error);
    });
};
