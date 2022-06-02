/* Recordings
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import RecordingsCard from "./RecordingsCard";
import "../../styles/Recordings/Recordings.css";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import { Outlet, useOutlet } from "react-router-dom";

const Recordings = (props) => {
  // Language
  const { t } = useTranslation();
  //Logica para generar las cards
  const [arrRecordings] = useContext(RecordingsContext);
  const INPUT_NAME = "recordings";

  //Variable to verify if an outlet exists
  // It is expected that the outlet is <RecordingsVideo />
  const outlet = useOutlet();

  const switchInputType = (t) => {
    document.getElementById("re-input").type = t;
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
            {arrRecordings.map((record_info) => (
              <RecordingsCard
                id={record_info.id}
                key={record_info.id}
                record={record_info}
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
