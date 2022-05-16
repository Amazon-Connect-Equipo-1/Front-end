import "../../styles/Recordings/RecordingsVideo.css";
import video from "../../images/bbva_video.PNG";
import AboutCard from "./AboutCard";
import Card from "../UI/Card";
import GiveFeedbackCard from "./GiveFeedbackCard";
import AgentFeedbackCard from "./AgentFeedbackCard";

const RecordingsVideo = (props) => {
  const card = 1; //1: about, 2: Feedback, 3: Agent Feedback

  return (
    <Card className="rev-main-container">
      <div className="rev-container">
        <iframe
          className="rev-video"
          src="https://www.youtube.com/embed/0Kvw2BPKjz0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <img src={video} className="rev-video" /> */}
        {card === 1 && <AboutCard />}
        {card === 2 && <GiveFeedbackCard />}
        {card === 3 && <AgentFeedbackCard />}
      </div>
    </Card>
  );
};

export default RecordingsVideo;
