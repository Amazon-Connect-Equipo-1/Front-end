import Card from "../UI/Card";
import "./GiveFeedbackCard.css";

const GiveFeedbackCard = (props) => {
  return (
    <Card className="gfc-main-container">
      <div className="gfc-container">
        <div>
          <div className="gfc-navbar">
            <h2 className="gfc-title">About</h2>
            <h2 className="gfc-title">Feedback</h2>
          </div>
        </div>
        <div>
          <h3>Your feedback:</h3>
          <h3 className="gfc-feeback-score">🖖🖖🖖🖖🖖</h3>
        </div>
        <input className="gfc-input" type="text" />
        <Card className="gfc-send-btn">Send</Card>
      </div>
    </Card>
  );
};

export default GiveFeedbackCard;
