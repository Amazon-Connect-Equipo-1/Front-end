import Card from "../UI/Card";
import "../../styles/Recordings/AgentFeedbackCard.css";
import { useTranslation } from "react-i18next";

const AgentFeedbackCard = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="afc-main-container">
      <div className="afc-container">
        <div>
          <h2 className="afc-title">{t("qaFeedback")}</h2>
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
