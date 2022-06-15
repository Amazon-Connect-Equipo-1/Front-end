/* 
RecordingsCard.js

Authors:
- A01750145 Miguel Ángel Pérez López
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/04/2022
Last modification date: 09/06/2022

Program that displays an individual recording card. 
*/

//Import Modules
import Card from "../UI/Card";
import logo from "../../images/bbva_video.PNG";
import "../../styles/Recordings/RecordingsCard.css";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const RecordingsCard = (props) => {
  const adaptFontSize = () => {
    if (props.agentName.length > 16) {
      return "rec-agent-name-small";
    }
    if (props.agentName.length > 13) {
      return "rec-agent-name-md";
    }
    return "";
  };

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

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [, , , getSelectedVideoInfo] = useContext(RecordingsContext);

  const onSelectCard = () => {
    getSelectedVideoInfo(props.recordingId);
    window.localStorage.setItem("recordingId", props.recordingId);
    setTimeout(() => {
      if (props.origin === "qaRecordings") {
        navigate("video/" + "qa" + props.recordingId);
      } else {
        navigate("agent-video/" + "ag" + props.recordingId);
      }
    }, 300);
  };

  const getTags = () => {
    return props.tags !== undefined ? props.tags : [];
  };

  return (
    <button onClick={onSelectCard} className="link rec-main-container">
      <div className="rec-container">
        <div className="rec-video-section">
          <div className="rec-video">
            <img
              src={props.thumbnail}
              className="rec-video-img"
              onClick={props.onClickCard}
            ></img>
          </div>
          <div className="rec-video-info" onClick={props.onClickCard}>
            <h2 className={`rec-agent-name ${adaptFontSize()}`}>
              {props.agentName}
            </h2>
            <h3 className="rec-date">{props.date}</h3>
          </div>
        </div>
        <div className="rec-tag-section">
          {getTags().map((tag) => (
            <Card key={uuidv4()} className={`rec-tag ${processTagCss(tag)} `}>
              {processTagName(t(tag))}
            </Card>
          ))}
        </div>
      </div>
    </button>
  );
};

export default RecordingsCard;
