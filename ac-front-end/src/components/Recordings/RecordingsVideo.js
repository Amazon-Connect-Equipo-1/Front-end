/* 
RecordingsVideo.js

Authors:
- A01750145 Miguel Ángel Pérez López

Creation date: 03/05/2022
Last modification date: 09/06/2022

Program that contains the information of a recording. 
*/

//Import Modules
import "../../styles/Recordings/RecordingsVideo.css";
import video from "../../images/bbva_video.PNG";
import AboutCard from "./AboutCard";
import Card from "../UI/Card";
import GiveFeedbackCard from "./GiveFeedbackCard";
import AgentFeedbackCard from "../QualityControl/AgentFeedbackCard";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { RecordingsContext } from "../RecordingsSupplier";
import RecordingsChart from "./RecordingsCharts";
import { AiOutlineClose } from "react-icons/ai";

const RecordingsVideo = (props) => {
  // const card = 2; //1: about, 2: QA Feedback
  const [cardName, setCardName] = useState("About");
  const { id } = useParams();
  const [, , selectedVideoInfo, getSelectedVideoInfo] =
    useContext(RecordingsContext);
  const navigate = useNavigate();

  //Variable to reduce the length of object manipulation
  let videoInfo = {};
  if (selectedVideoInfo !== undefined) {
    videoInfo = selectedVideoInfo.recording;
  } else {
    //If it does not exists it needs to fetch again
    // console.log(id.slice(2));
    // getSelectedVideoInfo(id.slice(2));
    // setTimeout(() => {
    //   videoInfo = selectedVideoInfo.recording;
    // }, 500);
    videoInfo = window.localStorage.getItem("selectedVideoInfo");
    videoInfo = JSON.parse(videoInfo).recording;
    console.log(videoInfo);
  }

  const changeCardHandler = () => {
    if (cardName === "About") {
      setCardName("Sentimental Analysis");
    } else {
      setCardName("About");
    }
  };

  const onChangeReturnBtn = () => {
    console.log("sliceee id", id.slice(2));
    console.log(id.slice(0, 2));
    if (id.slice(0, 2) === "qa") {
      navigate("/recordings");
    } else {
      navigate("/agent-qa");
    }
  };

  // console.log("linkk", videoInfo.videoRecording);
  return (
    <Card className="rev-main-container">
      <div
        className="rev-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <button onClick={onChangeReturnBtn} className="rev-return-btn">
          <IoChevronBack size={30} />
        </button>
        <div className="rev-sub-left-container">
          <iframe
            srcDoc={`<video controls crossOrigin='anonymous'>
     <source type='video/mp4' src='${videoInfo.processedRecording}' /><track src=${videoInfo.subtitles} label="English" kind="captions" /></video>`}
            className="rev-video"
            src={videoInfo.processedRecording} //proccessed recording no jala
            allowFullScreen
            id="rec-frame"
          />
        </div>
        {cardName === "About" && <AboutCard onChangeCard={changeCardHandler} />}
        {cardName === "Sentimental Analysis" && (
          <RecordingsChart
            onChangeCard={changeCardHandler}
            sentimentByQuarter={
              videoInfo.recordingData.GraphCustomerSentimentByQuarter
            }
            sentimentOverall={
              videoInfo.recordingData.GraphCustomerSentimentOverall
            }
          />
        )}
      </div>
    </Card>
  );
};

export default RecordingsVideo;
