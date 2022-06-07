/* Recordings
Authors:
        A01777771 Stephen Strange*/

//Import Modules

import "../../styles/AgentRecordings/AgentRecordings.css";
import { useContext } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";
import { AgentRecordingsContext } from "../AgentRecordingsSupplier";
import RecordingsCard from "../Recordings/RecordingsCard";
import { RecordingsContext } from "../RecordingsSupplier";

const AgentRecordings = () => {
  // Language
  const { t } = useTranslation();

  const [arrRecordings] = useContext(RecordingsContext);
  const INPUT_NAME = "agent recordings";

  //Variable to verify if an outlet exists
  // It is expected that the outlet is <AgentRecordingsVideo />
  const outlet = useOutlet();

  const switchInputType = (t) => {
    document.getElementById("arc-input").type = t;
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
                {/* <option>{t("search")}</option> */}
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
              />
              <button href="/" className="arc-btn">
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
                origin="agentRecordings"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AgentRecordings;
