import RecordingsCard from "./RecordingsCard";
import "./Recordings.css";

const Recordings = (props) => {
  //Logica para generar las cards

  return (
    <div className="re-main-container">
      <div className="re-container">
        <div className="re-search-container">
          <input className="re-input" type="text" placeholder="Search" />
          <select className="re-select">
            <option>Search</option>
            <option value="date">Date</option>
            <option value="tag">Tag</option>
          </select>
        </div>
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
        <RecordingsCard />
      </div>
    </div>
  );
};

export default Recordings;
