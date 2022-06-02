/* Agent FeedbackCard
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import Card from "../UI/Card";
import "../../styles/Recordings/AgentFeedbackCard.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const AgentFeedbackCard = (props) => {
  // Language
  const { t } = useTranslation();
  const [comment, setComment] = useState("");

  useEffect(() => {
    getFeedback();
  }, []);
  const getFeedback = () => {
    const myHeaders = new Headers();
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://35.88.250.238:8080/agent/getFeedback?email=${email}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result);
        console.log(resultJSON.comments[0].comment);
        setComment(resultJSON.comments[0].comment);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <aside className={`afc-main-container ${props.className}`}>
      <div className="afc-container">
        <h2 className="afc-title">{t("qaFeedback")}</h2>
        <textarea className="afc-feedback">{comment}</textarea>
        <Card className="afc-send-btn">{t("acceptFeedback")}</Card>
      </div>
    </aside>
  );
};

export default AgentFeedbackCard;
