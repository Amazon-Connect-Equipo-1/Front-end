import Card from "../UI/Card";
import "./AboutCard.css";

const AboutCard = (props) => {
  return (
    <Card className="abc-main-container">
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">About</h2>
          <h2 className="abc-title">Feedback</h2>
        </div>
        <h3>
          ID: <span>120372</span>
        </h3>
        <h3>
          Duration: <span>00:12:41</span>
        </h3>
        <h3 className="margin-top-md">
          Agent: <span>Dwight Schrute</span>
        </h3>
        <h3>
          Client: <span>Stanley Hudson</span>
        </h3>
        <h3>
          Client's Problem: <span>Lost card</span>
        </h3>
        <h3>
          Third Party Service: <span>Uber</span>
        </h3>
        <div className="margin-top-md">
          <h3>Client's Feedback:</h3>
          <h3 className="abc-feeback-score">🖖🖖🖖🖖🖖</h3>
        </div>
        <div className="margin-top-md">
          <h3>Your Feedback:</h3>
          <h3>No Feedback Submited</h3>
        </div>
        <div className="abc-tag-section">
          {/* Logic of tags (.map()) */}
          <Card className="abc-tag">Work</Card>
          <Card className="abc-tag">Bussiness</Card>
          <Card className="abc-tag">Theft</Card>
        </div>
        <Card className="abc-feedback-btn">Give Feedback</Card>
      </div>
    </Card>
  );
};

export default AboutCard;
