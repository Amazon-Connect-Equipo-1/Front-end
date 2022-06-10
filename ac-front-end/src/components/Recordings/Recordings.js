/* Recordings
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import RecordingsCard from "./RecordingsCard";
import "../../styles/Recordings/Recordings.css";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext, useEffect, useState } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Recordings = (props) => {
  // Language
  const { t } = useTranslation();
  //Logica para generar las cards
  const [
    arrRecordings,
    ,
    ,
    ,
    ,
    getRecordsByAgent,
    getRecordingsByDate,
    getRecordsByTags,
  ] = useContext(RecordingsContext);
  const [searchInput, setSearchInput] = useState("");
  const [spinnerValue, setSpinnerValue] = useState("tag");
  const INPUT_NAME = "recordings";

  //Variable to verify if an outlet exists
  // It is expected that the outlet is <RecordingsVideo />
  const outlet = useOutlet();

  const switchInputType = (spinnerOption) => {
    setSpinnerValue(spinnerOption);
    console.log(spinnerOption);
    if (spinnerOption === "date") {
      document.getElementById("re-input").type = spinnerOption;
    } else {
      document.getElementById("re-input").type = "text";
    }
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const onFilterRecordings = () => {
    //Petition for filtering videos
    if (searchInput !== "") {
      //Check type of search (date, tag, agent name)
      if (spinnerValue === "email") {
        //Make petition
        getRecordsByAgent(searchInput);
        // setSearchInput("");
      } else if (spinnerValue === "tag") {
        //Make petition
        console.log(searchInput);
        console.log("petition tag");
        getRecordsByTags([searchInput]);
        // setSearchInput("");
      } else {
        //spinnerValue === "date"
        //Make petition
        console.log("doing petition");
        getRecordingsByDate(searchInput);
        // setSearchInput("");
      }
    } else {
      console.log("Empty input");
    }
  };

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
                <option value="tag">{t("tag")}</option>
                <option value="date">{t("date")}</option>
                <option value="email">Email</option>
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
                onChange={onChangeSearchInput}
                value={searchInput}
              />
              <button href="/" className="re-btn" onClick={onFilterRecordings}>
                {t("search")}
              </button>
            </div>
            {arrRecordings.length > 0 &&
              arrRecordings.map((recordInfo) => (
                <RecordingsCard
                  recordingId={recordInfo.RecordingId}
                  agentId={recordInfo.agentId}
                  key={recordInfo.RecordingId}
                  date={recordInfo.initialTimestamp}
                  agentName={recordInfo.agentName}
                  tags={recordInfo.tags}
                  thumbnail={recordInfo.thumbnail}
                  origin="qaRecordings"
                />
              ))}
            {arrRecordings.length === 0 && (
              <p className="re-no-recordings">{`No recordings found`}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Recordings;
