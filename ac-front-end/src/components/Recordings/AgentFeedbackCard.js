import Card from "../UI/Card";
import "./AgentFeedbackCard.css";

const AgentFeedbackCard = (props) => {
  return (
    <Card className="afc-main-container">
      <div className="afc-container">
        <div>
          <h2 className="afc-title">QA Feedback</h2>
        </div>
        <h3 className="afc-feeback-score">🖖🖖🖖🖖🖖</h3>
        <Card className="afc-feedback">
          Nice job Dwight, next time try to talk louder.
        </Card>
        <Card className="afc-send-btn">Accept Feedback</Card>
      </div>
    </Card>
  );
};

export default AgentFeedbackCard;
