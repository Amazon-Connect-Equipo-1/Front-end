/* Recordings
Authors:
        A01777771 Stephen Strange*/

//Import Modules

import "../../styles/AgentRecordings/AgentRecordings.css";
import { useContext, useState } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";
import RecordingsCard from "../Recordings/RecordingsCard";
import { RecordingsContext } from "../RecordingsSupplier";

const AgentRecordings = () => {
  // Language
  const { t } = useTranslation();

  const [, , , , arrAgentRecordings, , getRecordingsByDate, getRecordsByTags] =
    useContext(RecordingsContext);
  const [searchInput, setSearchInput] = useState("");
  const [spinnerValue, setSpinnerValue] = useState("tag");
  const INPUT_NAME = "agent recordings";

  //Variable to verify if an outlet exists
  // It is expected that the outlet is <AgentRecordingsVideo />
  const outlet = useOutlet();

  const switchInputType = (spinnerOption) => {
    setSpinnerValue(spinnerOption);
    console.log(spinnerOption);
    if (spinnerOption === "date") {
      document.getElementById("arc-input").type = spinnerOption;
    } else {
      document.getElementById("arc-input").type = "text";
    }
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const onFilterRecordings = () => {
    //Petition for filtering videos
    if (searchInput !== "") {
      console.log(searchInput);

      //Check type of search (date, tag)
      if (spinnerValue === "tag") {
        //Make petition
        getRecordsByTags([searchInput], window.localStorage.getItem("email"));
      } else {
        //spinnerValue === "date"
        //Make petition
        console.log("doing petition");
        getRecordingsByDate(searchInput, window.localStorage.getItem("email"));
        // setSearchInput("");
      }
    } else {
      console.log("Empty input");
    }
  };

  return (
    <>
      {outlet || (
        <div className="arc-main-container" data-aos="fade-up">
          <div className="arc-container">
            <div className="arc-search-container">
              <select
                className="arc-select"
                id="arc-select"
                onClick={() => saveClick(`${INPUT_NAME} filter scroller`)}
                onChange={(e) => switchInputType(e.target.value)}
              >
                <option value="tag">{t("tag")}</option>
                <option value="date">{t("date")}</option>
              </select>
              <input
                onKeyDown={saveKeys}
                onClick={() => saveClick(`${INPUT_NAME} input`)}
                className="arc-input"
                id="arc-input"
                type="text"
                placeholder={t("placeholder")}
                min="2022-06-01"
                max="2029-12-31"
                onChange={onChangeSearchInput}
                value={searchInput}
              />
              <button href="/" className="arc-btn" onClick={onFilterRecordings}>
                {t("search")}
              </button>
            </div>
            {arrAgentRecordings.length > 0 &&
              arrAgentRecordings.map((recordInfo) => (
                <RecordingsCard
                  recordingId={recordInfo.RecordingId}
                  agentId={recordInfo.agentId}
                  key={recordInfo.RecordingId}
                  date={recordInfo.initialTimestamp}
                  agentName={recordInfo.agentName}
                  thumbnail={recordInfo.thumbnail}
                  tags={recordInfo.tags}
                  origin="agentRecordings"
                />
              ))}
            {arrAgentRecordings.length === 0 && (
              <p className="arc-no-recordings">{t("noRecordings")}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AgentRecordings;
