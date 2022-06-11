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
      `https://backtest.bankonnect.link/agent/getFeedback?email=${email}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result).comments;
        const commentsLength = resultJSON.length;
        console.log(resultJSON);
        console.log(commentsLength);
        if (commentsLength > 0) {
          setComment(resultJSON[commentsLength - 1].comment);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const acceptFeedback = () => {
    const commentId = "";
    const myHeaders = new Headers();
    const token = window.localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      comment_id: commentId,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/agent/acceptFeedback",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <aside className={`afc-main-container ${props.className}`}>
      <div className="afc-container">
        <h2 className="afc-title">{t("qaFeedback")}</h2>
        {comment.length !== 0 && <p>{comment}</p>}
        {comment.length !== 0 && (
          <button className="afc-send-btn" onClick={acceptFeedback}>
            {t("acceptFeedback")}
          </button>
        )}
        {comment.length === 0 && <p>{t("noFeedbackAvailable")}</p>}
      </div>
    </aside>
  );
};

export default AgentFeedbackCard;
