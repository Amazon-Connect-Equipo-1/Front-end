import Card from "../UI/Card";
import logo from "../../images/bbva_video.PNG";
import "../../styles/Recordings/RecordingsCard.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const RecordingsCard = (props) => {
  //Logic to determine the tags
  const getRating = (rating) => {
    return "🖖".repeat(rating);
  };

  const getColor = (tagName) => {
    switch (tagName) {
      case "Work":
        return "red";
      case "Business":
        return "blue";
      default:
        return "green";
    }
  };

  return (
    <Card className="rec-main-container">
      <div className="rec-container">
        <div className="rec-video-section">
          <div className="rec-video">
            <Link to="video">Mike</Link>

            <img
              src={logo}
              className="rec-video-img"
              onClick={props.onClickCard}
            />
          </div>
          <div className="rec-video-info" onClick={props.onClickCard}>
            <h2 className="rec-agent-name">{props.record.agent_name}</h2>
            <h3 className="rec-date">{props.record.date}</h3>
            <h3 className="rec-score">{getRating(props.record.rating)}</h3>
          </div>
        </div>
        <div className="rec-tag-section" onClick={props.onClickCard}>
          {props.record.tags.map((tag) => (
            <Card key={uuidv4()} className={`rec-tag ${getColor(tag)}-tag `}>
              {tag}
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecordingsCard;
