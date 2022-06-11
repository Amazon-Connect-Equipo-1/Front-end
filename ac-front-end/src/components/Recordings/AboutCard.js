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
    <Card className="abc-main-container">
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">{t("about")}</h2>
          <h2 className="abc-title" onClick={props.onChangeCard}>
            {t("analysis")}
          </h2>
        </div>
        <h2>{t("call")}</h2>
        <p>
          ID: <span>{videoInfo.RecordingId}</span>
        </p>
        <p>
          {t("duration")} <span>{videoInfo.duration}</span>
        </p>
        <p>
          {t("startCall")} <span>{videoInfo.initialTimestamp}</span>
        </p>
        <p>
          {t("endCall")} <span>{videoInfo.disconnectTimestamp}</span>
        </p>
        <p className="margin-top-md">
          {t("agent")} <span>{videoInfo.agentName}</span>
        </p>
        <h2 className="abc-margin-top-md">{t("analysis")}</h2>
        <p>
          {t("agentInterruptions")}{" "}
          <span>{videoInfo.recordingData.AgentInterruptions}</span>
        </p>
        <p>
          {t("userInterruptions")}{" "}
          <span>{videoInfo.recordingData.CustomerInterruptions}</span>
        </p>
        <p>
          {t("agentSentiment")}{" "}
          <span>{videoInfo.recordingData.OverallAgentSentiment}</span>
        </p>
        <p>
          {t("userSentiment")}{" "}
          <span>{videoInfo.recordingData.OverallCustomerSentiment}</span>
        </p>
        <div className="abc-tag-section">
          {getTags().map((tag) => (
            <Card key={uuidv4()} className={`rec-tag ${processTagCss(tag)} `}>
              {processTagName(t(tag))}
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AboutCard;
