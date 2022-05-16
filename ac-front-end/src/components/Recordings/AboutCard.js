import Card from "../UI/Card";
import "../../styles/Recordings/AboutCard.css";
import { useTranslation } from "react-i18next";

const AboutCard = (props) => {
  // Language
  const { t } = useTranslation();
  return (
    <Card className="abc-main-container">
      <div className="abc-container">
        <div className="abc-navbar">
          <h2 className="abc-title">{t("about")}</h2>
          <h2 className="abc-title">{t("feedback")}</h2>
        </div>
        <h3>
          ID: <span>120372</span>
        </h3>
        <h3>
          {t("duration")} <span>00:12:41</span>
        </h3>
        <h3 className="margin-top-md">
          {t("agent")} <span>Dwight Schrute</span>
        </h3>
        <h3>
          {t("client")} <span>Stanley Hudson</span>
        </h3>
        <h3>
          {t("clientsProblem")} <span>{t("lostCard")}</span>
        </h3>
        <h3>
          {t("thirdPartyService")} <span>Uber</span>
        </h3>
        <div className="margin-top-md">
          <h3>{t("clientsFeedback")}</h3>
          <h3 className="abc-feeback-score">🖖🖖🖖🖖🖖</h3>
        </div>
        <div className="margin-top-md">
          <h3>{t("yourFeedback")}</h3>
          <h3>{t("noFeedback")}</h3>
        </div>
        <div className="abc-tag-section">
          {/* Logic of tags (.map()) */}
          <Card className="abc-tag">Work</Card>
          <Card className="abc-tag">Bussiness</Card>
          <Card className="abc-tag">Theft</Card>
          <Card className="abc-tag">Bussiness</Card>
          <Card className="abc-tag">Theft</Card>
          <Card className="abc-tag">Wodddrk</Card>
        </div>
        <Card className="abc-feedback-btn">Give Feedback</Card>
      </div>
    </Card>
  );
};

export default AboutCard;
