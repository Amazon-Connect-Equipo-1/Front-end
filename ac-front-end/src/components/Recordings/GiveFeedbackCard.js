import Card from "../UI/Card";
import "../../styles/Recordings/GiveFeedbackCard.css";
import { useTranslation } from "react-i18next";

const GiveFeedbackCard = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="gfc-main-container">
      <div className="gfc-container">
        <div>
          <div className="gfc-navbar">
            <h2 className="gfc-title">{t("about")}</h2>
            <h2 className="gfc-title">{t("feedback")}</h2>
          </div>
        </div>
        <div>
          <h3>{t("yourFeedback")}</h3>
          <h3 className="gfc-feeback-score">🖖🖖🖖🖖🖖</h3>
        </div>
        <input className="gfc-input" type="text" />
        <Card className="gfc-send-btn">Send</Card>
      </div>
    </Card>
  );
};

export default GiveFeedbackCard;
