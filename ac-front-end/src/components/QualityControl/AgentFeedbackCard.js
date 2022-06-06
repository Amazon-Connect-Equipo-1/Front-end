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
  const commentId = "";

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
        const resultJSON = JSON.parse(result);
        console.log(resultJSON.comments[0].comment);
        setComment(resultJSON.comments[0].comment);
        commentId = resultJSON.comments[0].comment_id;
      })
      .catch((error) => console.log("error", error));
  };

  const acceptFeedback = () => {
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
  const giveFeedback = () => {
    const myHeaders = new Headers();
    const token = window.localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      super_id: "",
      agent_email: "",
      comment: "",
      rating: "",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/manager/postComment",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <aside className={`afc-main-container ${props.className}`}>
      <div className="afc-container">
        <h2 className="afc-title">{t("qaFeedback")}</h2>
        {/* <textarea
          className="afc-feedback"
          onChange={onChangeComment}
          value={comment}
        /> */}
        {comment.length !== 0 && <p>You did it good!</p>}
        {comment.length !== 0 && (
          <Card className="afc-send-btn" onSubmit={acceptFeedback}>
            {t("acceptFeedback")}
          </Card>
        )}
        {comment.length === 0 && <p>No feedback available</p>}
      </div>
    </aside>
  );
};

export default AgentFeedbackCard;
