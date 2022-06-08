/* Recordings
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import RecordingsCard from "./RecordingsCard";
import "../../styles/Recordings/Recordings.css";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext, useEffect } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Recordings = (props) => {
  // Language
  const { t } = useTranslation();
  //Logica para generar las cards
  const [arrRecordings, getVideos] = useContext(RecordingsContext);
  const INPUT_NAME = "recordings";

  //Variable to verify if an outlet exists
  // It is expected that the outlet is <RecordingsVideo />
  const outlet = useOutlet();

  const switchInputType = (t) => {
    document.getElementById("re-input").type = t;
  };

  console.log("recordings", arrRecordings);

  return (
    <>
      {outlet || (
        <div className="re-main-container" data-aos="fade-up">
          <div
            className="re-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="re-search-container">
              <select
                className="re-select"
                onClick={() => saveClick(`${INPUT_NAME} filter scroller`)}
                onChange={(e) => switchInputType(e.target.value)}
              >
                {/* <option>{t("search")}</option> */}
                <option value="tag">{t("tag")}</option>
                <option value="date">{t("date")}</option>
              </select>
              <input
                onKeyDown={saveKeys}
                onClick={() => saveClick(`${INPUT_NAME} input`)}
                className="re-input"
                id="re-input"
                type="text"
                placeholder="Search"
                min="2022-06-01"
                max="2029-12-31"
              />
              <button href="/" className="re-btn">
                {t("search")}
              </button>
            </div>
            {arrRecordings.map((recordInfo) => (
              <RecordingsCard
                recordingId={recordInfo.RecordingId}
                agentId={recordInfo.agentId}
                key={recordInfo.RecordingId}
                date={recordInfo.initialTimestamp}
                agentName={recordInfo.agentName}
                tags={recordInfo.tags}
                thumbnail={recordInfo.thumbnail}
                subtitles={recordInfo.subtitles}
                origin="qaRecordings"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Recordings;
