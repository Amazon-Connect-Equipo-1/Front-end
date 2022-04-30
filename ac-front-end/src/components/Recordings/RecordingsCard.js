import Card from "../UI/Card";
import logo from "../../images/bbva_video.PNG";
import "./RecordingsCard.css";

const RecordingsCard = (props) => {
  //Logic to determine the tags

  return (
    <Card className="rec-main-container">
      <div className="rec-container">
        <div className="rec-video-section">
          <img src={logo} className="rec-video-img" />
          <div className="rec-video-info">
            <h2 className="rec-agent-name">Jim Halpert</h2>
            <h3 className="rec-date">25/12/2022</h3>
            <h3 className="rec-score">🖖🖖🖖🖖🖖</h3>
          </div>
        </div>
        <div className="rec-tag-section">
          {/* Logic of tags (.map()) */}
          <Card className="rec-tag">Work</Card>
          <Card className="rec-tag">Bussiness</Card>
          <Card className="rec-tag">Theft</Card>
        </div>
      </div>
    </Card>
  );
};

export default RecordingsCard;
