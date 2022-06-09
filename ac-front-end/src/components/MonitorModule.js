/* Monitor Module
Authors:
        A01777771 Stephen Strange*/

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
    key: "h,e,l,l,o",
    agent_id: "05065c6c-844f-416c-8159-89bd798a0145",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://backtest.bankonnect.link/keyclick/addKeystroke",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const saveClick = (elementName) => {
  console.log(`Click in ${elementName}`, giveTimestamp());
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify({
    key: "login",
    agent_id: "05065c6c-844f-416c-8159-89bd798a0145",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://backtest.bankonnect.link/keyclick/addClick", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
