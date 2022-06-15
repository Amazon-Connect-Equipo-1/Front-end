/* 
AgentFeedbackCard.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo
- A01750185 Amy Murakami Tsutsumi

- A01749373 Ariadna Jocelyn Guzmán Jiménez

Creation date: 01/05/2022
Last modification date: 10/06/2022

Component in which QA feedback is displayed and the agent accepts these comments. 
*/

//Import Modules
import Card from "../UI/Card";
import "../../styles/Recordings/AgentFeedbackCard.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AgentFeedbackCard = (props) => {
  // Language
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const [feedbackAccepted, setFeedbackAccepted] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [commentDate, setCommentDate] = useState("");

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_ENDPOINT_BACK_END +
        `agent/getFeedback?email=${email}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultJSON = JSON.parse(result).comments;
        const commentsLength = resultJSON.length;
        console.log(resultJSON);
        // console.log(commentsLength);
        if (commentsLength > 0) {
          //Set variable to see if the agent has accepted that feedback
          setFeedbackAccepted(resultJSON[commentsLength - 1].seen);
          setComment(resultJSON[commentsLength - 1].comment);
          setCommentId(`${resultJSON[commentsLength - 1].comment_id}`);
          setCommentDate(`${resultJSON[commentsLength - 1].date.slice(0, 10)}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };

  const acceptFeedback = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("token")}`
    );
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
      process.env.REACT_APP_ENDPOINT_BACK_END + "agent/acceptFeedback",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setFeedbackAccepted(true);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error);
      });
  };

  return (
    <aside className={`afc-main-container ${props.className}`}>
      <div className="afc-container">
        <h2 className="afc-title">{t("qaFeedback")}</h2>
        {comment.length !== 0 && (
          <>
            <p>{commentDate}</p>
            <p>{comment}</p>
          </>
        )}
        {comment.length !== 0 && !feedbackAccepted && (
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
