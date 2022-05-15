import RecordingsCard from "./RecordingsCard";
import "./Recordings.css";
import { RecordingsContext } from "../RecordingsSupplier";
import { useContext } from "react";
import { saveKeys, saveClick } from "../MonitorModule.js";

const Recordings = (props) => {
  //Logica para generar las cards
  const [arrRecordings] = useContext(RecordingsContext);
  const INPUT_NAME = "recordings";

  //Dummy list (delete)
  const keyList = [];

  return (
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
            <option>Search</option>
            <option value="date">Date</option>
            <option value="tag">Tag</option>
          </select>
        </div>
        {arrRecordings.map((record_info) => (
          <RecordingsCard key={record_info.id} record={record_info} />
        ))}
      </div>
    </div>
  );
};

export default Recordings;
