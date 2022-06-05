/* About Card
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import React from "react";
import { Bar } from "react-chartjs-2";
import Card from "../UI/Card";
import "../../styles/Recordings/AboutCard.css";
import { useTranslation } from "react-i18next";

const AboutCard = (props) => {
  // Language
  const { t } = useTranslation();

  //Dummy sentiment graph
  const state = {
    labels: ["Negative", "Neutral", "Positive"],
    datasets: [
      {
        backgroundColor: "#233445",
        borderColor: "#000000",
        borderWidth: 1,
        data: [0, 44.5, 55.5],
      },
    ],
  };

  return (
    <Card className="abc-main-container">
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">{t("about")}</h2>
        </div>
        <h2>{t("call")}</h2>
        <h3>
          ID: <span>120372</span>
        </h3>
        <h3>
          {t("duration")} <span>00:12:41</span>
        </h3>
        <h3>
          {t("startCall")} <span>00:12:41</span>
        </h3>
        <h3>
          {t("endCall")} <span>00:12:41</span>
        </h3>
        <h3 className="margin-top-md">
          {t("agent")} <span>Dwight Schrute</span>
        </h3>
        {/* <h3>
          {t("client")} <span>Stanley Hudson</span>
        </h3> */}
        {/* <h3>
          {t("clientsProblem")} <span>{t("lostCard")}</span>
        </h3> */}
        <h2>{t("analysis")}</h2>
        <h3>
          {t("agentInterruptions")} <span>4</span>
        </h3>
        <h3>
          {t("userInterruptions")} <span>10</span>
        </h3>
        <h3>
          {t("agentSentiment")} <span>10</span>
        </h3>
        <h3>
          {t("userSentiment")} <span>10</span>
        </h3>
        {/* <h3>
          {t("thirdPartyService")} <span>Uber</span>
        </h3> */}
        {/* <div className="margin-top-md">
          <h3>{t("clientsFeedback")}</h3>
          <h3 className="abc-feeback-score">🖖🖖🖖🖖🖖</h3>
        </div> */}
        <div className="margin-top-md">
          <h3>{t("yourFeedback")}</h3>
          <h3>{t("noFeedback")}</h3>
        </div>
        <div className="abc-tag-section">
          {/* Logic of tags (.map()) */}
          <Card className="abc-tag">{t("work")}</Card>
          <Card className="abc-tag">{t("business")}</Card>
          <Card className="abc-tag">{t("theft")}</Card>
          <Card className="abc-tag">{t("business")}</Card>
          <Card className="abc-tag">{t("theft")}</Card>
          <Card className="abc-tag">Wodddrk</Card>
        </div>
        {/*
        <Card>
        <div>
          <Bar 
            data={state}
            options={{
              title:{
                display: true,
                text: "Sentiments analysis",
                fontSize: 20
              },
              legend: {
                display: true,
                position: "right"
              }
            }}
            />
        </div>
        </Card> */}
        {/* <Card className="abc-feedback-btn">Give Feedback</Card> */}
      </div>
    </Card>
  );
};

export default AboutCard;
