/*
AgentRecordings.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01379868 Jared  Abraham Flores Guarneros
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 25/05/2022
Last modification date: 10/06/2022

Component that contains the recodings and the corresponding tags. 
*/

//Import Modules

import "../../styles/AgentRecordings/AgentRecordings.css";
import { useContext, useState } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";
import RecordingsCard from "../Recordings/RecordingsCard";
import { RecordingsContext } from "../RecordingsSupplier";
import { Autocomplete, TextField } from "@mui/material";

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
    setSearchInput(event.target.value);
  };

  const onFilterRecordings = () => {
    //Petition for filtering videos
    if (searchInput !== "") {
      //Check type of search (date, tag)
      if (spinnerValue === "tag") {
        //Make petition
        getRecordsByTags([searchInput], window.localStorage.getItem("email"));
      } else {
        //spinnerValue === "date"
        //Make petition
        getRecordingsByDate(searchInput, window.localStorage.getItem("email"));
      }
    } else {
      console.log("Empty input");
    }
  };

  const [tagValue, setTagValue] = useState([]);

  const arrayTags = [];
  console.log(arrAgentRecordings);
  if (arrAgentRecordings.length !== 0) {
    arrAgentRecordings.map((recordInfo) =>
      recordInfo.tags.map((tag) => {
        if (arrayTags.includes(tag) === false) {
          arrayTags.push(tag);
        }
      })
    );
  }

  const processTagName = (tagName) => {
    let filteredTagName = tagName.replaceAll("negative", "neg");
    filteredTagName = filteredTagName.replaceAll("positive", "pos");
    return filteredTagName.includes("-")
      ? filteredTagName.replaceAll("-", " ")
      : filteredTagName;
  };

  const optionsTags = [];
  {
    arrayTags.map((arrTag) => {
      optionsTags.push({ label: processTagName(t(arrTag)), id: arrTag });
    });
  }

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
              {spinnerValue === "tag" && (
                <Autocomplete
                  multiple
                  limitTags={2}
                  className="arc-search"
                  id="arc-search"
                  options={optionsTags}
                  getOptionLabel={(option) => option.label}
                  onClick={() => saveClick(`${INPUT_NAME} input`)}
                  onChange={(event, newValue) => {
                    setTagValue(newValue);
                    getRecordsByTags(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="text-field"
                      id="text-field"
                      label={t("Tags")}
                    />
                  )}
                />
              )}
              {spinnerValue === "date" && (
                <input
                  onKeyDown={saveKeys}
                  onClick={() => saveClick(`${INPUT_NAME} input`)}
                  className="arc-input"
                  id="arc-input"
                  type="date"
                  placeholder={t("placeholder")}
                  min="2022-06-01"
                  max="2029-12-31"
                  onChange={onChangeSearchInput}
                  value={searchInput}
                />
              )}
              {spinnerValue === "date" && (
                <button
                  href="/"
                  className="arc-btn"
                  onClick={() => {
                    onFilterRecordings();
                    saveClick(`${INPUT_NAME} date search button`);
                  }}
                >
                  {t("search")}
                </button>
              )}
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
