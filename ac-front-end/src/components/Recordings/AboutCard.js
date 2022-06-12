/* 
AboutCard.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 01/05/2022
Last modification date: 10/06/2022

(Decripción)
*/

//Import Modules
import React from "react";
import { Bar } from "react-chartjs-2";
import Card from "../UI/Card";
import "../../styles/Recordings/AboutCard.css";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { RecordingsContext } from "../RecordingsSupplier";
import { v4 as uuidv4 } from "uuid";

const AboutCard = (props) => {
  // Language
  const { t } = useTranslation();
  const [, , selectedVideoInfo, getSelectedVideoInfo] =
    useContext(RecordingsContext);

  //Variable to verify if the sentimental analysis exists
  const [recordingDataExists, setRecordingDataExists] = useState(true);

  //Variable to reduce the length of object manipulation
  //Variable to reduce the length of object manipulation
  let videoInfo = {};
  if (selectedVideoInfo !== undefined) {
    videoInfo = selectedVideoInfo.recording;
  } else {
    videoInfo = window.localStorage.getItem("selectedVideoInfo");
    videoInfo = JSON.parse(videoInfo).recording;
    console.log(videoInfo);
  }
  // const videoInfo = selectedVideoInfo.recording;

  const processTagName = (tagName) => {
    let filteredTagName = tagName.replaceAll("negative", "neg");
    filteredTagName = filteredTagName.replaceAll("positive", "pos");
    return filteredTagName.includes("-")
      ? filteredTagName.replaceAll("-", " ")
      : filteredTagName;
  };

  const processTagCss = (tagName) => {
    if (tagName === "3rd-party-services") {
      return "third-party-services";
    }
    return tagName;
  };

  const getTags = () => {
    return videoInfo.tags !== undefined ? videoInfo.tags : [];
  };

  const getRecordingData = () => {
    if (videoInfo.recordingData !== undefined) {
      setRecordingDataExists(true);
    } else {
      setRecordingDataExists(false);
    }
  };

  useEffect(() => getRecordingData(), []);

  return (
    <div
      className="abc-main-container"
      style={{
        justifyContent:
          window.localStorage.getItem("txtSize") === "big" ? "start" : "center",
      }}
    >
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">{t("about")}</h2>
          <h2 className="abc-title" onClick={props.onChangeCard}>
            {t("analysis")}
          </h2>
        </div>
        <h2>{t("call")}</h2>
        <p className="abc-info-title">
          ID: <span className="abc-call-info">{videoInfo.RecordingId}</span>
        </p>
        <p className="abc-info-title">
          {t("duration")}{" "}
          <span className="abc-call-info">{videoInfo.duration}</span>
        </p>
        <p className="abc-info-title">
          {t("startCall")}{" "}
          <span className="abc-call-info">{videoInfo.initialTimestamp}</span>
        </p>
        <p className="abc-info-title">
          {t("endCall")}{" "}
          <span className="abc-call-info">{videoInfo.disconnectTimestamp}</span>
        </p>
        <p className="margin-top-md abc-info-title">
          {t("agent")}{" "}
          <span className="abc-call-info">{videoInfo.agentName}</span>
        </p>
        <h2 className="abc-margin-top-md">{t("analysis")}</h2>
        <p className="abc-info-title">
          {t("agentInterruptions")}{" "}
          <span className="abc-call-info">
            {videoInfo.recordingData.AgentInterruptions}
          </span>
        </p>
        <p className="abc-info-title">
          {t("userInterruptions")}{" "}
          <span className="abc-call-info">
            {videoInfo.recordingData.CustomerInterruptions}
          </span>
        </p>
        <p className="abc-info-title">
          {t("agentSentiment")}{" "}
          <span className="abc-call-info">
            {videoInfo.recordingData.OverallAgentSentiment}
          </span>
        </p>
        <p className="abc-info-title">
          {t("userSentiment")}{" "}
          <span className="abc-call-info">
            {videoInfo.recordingData.OverallCustomerSentiment}
          </span>
        </p>
        <div className="abc-tag-section">
          {getTags().map((tag) => (
            <Card key={uuidv4()} className={`rec-tag ${processTagCss(tag)} `}>
              {processTagName(t(tag))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
