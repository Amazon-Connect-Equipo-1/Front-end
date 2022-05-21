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

  const outlet = useOutlet();

  return (
    <>
      {outlet || (
        <div className="re-main-container">
          <div className="re-container">
            <div className="re-search-container">
              <input
                onKeyDown={saveKeys}
                onClick={() => saveClick(`${INPUT_NAME} input`)}
                className="re-input"
                type="text"
                placeholder="Search"
              />
              <select
                className="re-select"
                onClick={() => saveClick(`${INPUT_NAME} filter scroller`)}
              >
                <option>{t("search")}</option>
                <option value="date">{t("date")}</option>
                <option value="tag">{t("tag")}</option>
              </select>
            </div>
            {arrRecordings.map((record_info) => (
              <RecordingsCard
                id={record_info.id}
                key={record_info.id}
                record={record_info}
              />
            ))}
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Recordings;
