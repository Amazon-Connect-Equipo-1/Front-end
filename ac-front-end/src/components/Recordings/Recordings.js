import RecordingsCard from "./RecordingsCard";
import "../../styles/Recordings/Recordings.css";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext, useState } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";
import { useTranslation } from "react-i18next";
import RecordingsVideo from "./RecordingsVideo";
import { GlobalContext } from "../GlobalSupplier";

const Recordings = (props) => {
  // Language
  const { t } = useTranslation();
  //Logica para generar las cards
  const [arrRecordings] = useContext(RecordingsContext);
  const INPUT_NAME = "recordings";

  const [showVideoCard, setShowVideoCard] = useContext(GlobalContext);

  const onClickCard = () => {
    setShowVideoCard(!showVideoCard);
  };

  return (
    <div>
      {showVideoCard && (
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
                key={record_info.id}
                record={record_info}
                onClickCard={onClickCard}
              />
            ))}
          </div>
        </div>
      )}
      {!showVideoCard && <RecordingsVideo />}
    </div>
  );
};

export default Recordings;
