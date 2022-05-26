/* Agent FeedbackCard
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import Card from "../UI/Card";
import "../../styles/Recordings/AgentFeedbackCard.css";
import { useTranslation } from "react-i18next";

const AgentFeedbackCard = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <aside className={`afc-main-container ${props.className}`}>
      <div className="afc-container">
        <h2 className="afc-title">{t("qaFeedback")}</h2>
        <Card className="afc-feedback">
          Nice job Dwight, next time try to talk louder.
        </Card>
        <Card className="afc-send-btn">Accept Feedback</Card>
      </div>
    </aside>
  );
};

export default AgentFeedbackCard;
