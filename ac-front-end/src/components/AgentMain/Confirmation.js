/* O
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentMain/ThirdParty.css";
import uberlogo from "../../images/uber.png";
import { createContext, Suspense, useState } from "react";

const Confirmation = (props) => {
  const token =
    "eyJraWQiOiJ1aVNXY0k0aG0rSTE3Y0lPWE1HN3NVMUxETFRtRzN4Rm1mY2lNUk5DaThNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkYzI4MzBhYi0xZGJkLTQ5OTctOWI0Yy1iZmUyODZkZGQyYjYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EaEttVmE3NFYiLCJjbGllbnRfaWQiOiI0dXVhNGVqdWR2N2JoMTZmbGIwc2YzZ2NyOCIsIm9yaWdpbl9qdGkiOiI2OWFlMGYwOC01Yjc1LTRmZmYtOGE2MC05YmJmNDRkMzAzNWYiLCJldmVudF9pZCI6IjRkMjNkMzkyLWUwOTYtNDUxOC1hM2UyLTBhMmM3ZDlkNThmMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTM5Mzk1NjksImV4cCI6MTY1NDAyNTk2OSwiaWF0IjoxNjUzOTM5NTY5LCJqdGkiOiI1ODMzNDM5Ny1lYjQ0LTRlNTUtOWI1OS1mOTkxM2Q4MTQ0MmEiLCJ1c2VybmFtZSI6ImRjMjgzMGFiLTFkYmQtNDk5Ny05YjRjLWJmZTI4NmRkZDJiNiJ9.3zxpUmbYVm0Kqzz3QHd3HaYfpHZop2Hps6LzDEIVwehOVOZJmb-tD5ei1xAVTwnB3UYcwXKj1B4Ean-2_75-wAs25LU6bZpSs_7VppUZpdGkJoTH8DylkzVSAYsEdfPxVsIXEoTtKJJFHmQiZFIBkhC5Ww1hJlT9jLckrtf1xoDNgf3vNJgPWlh6C9eKLw2ks4kZdgQjYsMp71E69ys3itjdJql60b1kbFW8PgRgYUzW1wiR4r6XOpjuTzgqZcwSoBV5BPdK3d9dcIA-suVllVuBrfjgC0EmUQhcjMMHalJ0_v9v9XsxGLViqIR9KqyqGfmmhE2kymt0AJcz9LRKuA";
  const [conf, setConf] = useState("no");
  const changeConfig = () => {
    setConf("yes");
  };
  const pruebaBackTPS = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      service: "Oxxo",
      service_data: {
        client: "Dwight Schrute",
        email: "A01379868@tec.mx",
        cellphone: "+525530323376",
        client_location: "Alfredo's Pizza Cafe",
        oxxo_address: {
          street: "JOSE MA LICEAGA 406 S/N, MORELOS SECC LOMA, 20270",
          state: "Aguascalientes",
          colony: "Aguascalientes",
          zip_code: 20270,
          country: "Mexico",
        },
        quantity: 501,
        account_number: 6969696969,
        reference: "891753",
        security_token: "4605",
        timestamp: "2022-05-30 15:16:53.006495",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://35.88.250.238:8080/tps/sendService", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="tp-confirmation">
      <div className="tp-title">
        Service Confirmation
        {conf === "yes" && (
          <div>
            <div className="tp-confirmation-text">Informacion Enviada!</div>
            <div className="tp-confirmation-button-container">
              <button
                className="tp-confirmation-button"
                onClick={pruebaBackTPS}
              >
                confirmado
              </button>
            </div>
          </div>
        )}
        {conf === "no" && (
          <div>
            <div className="tp-confirmation-text">sexo</div>
            <div className="tp-confirmation-button-container">
              <button className="tp-confirmation-button">Regresar</button>
              <button className="tp-confirmation-button" onClick={changeConfig}>
                Mandar info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Confirmation;
