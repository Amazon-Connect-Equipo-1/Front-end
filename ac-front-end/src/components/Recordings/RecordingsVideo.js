/* Recordings Video
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/Recordings/RecordingsVideo.css";
import video from "../../images/bbva_video.PNG";
import AboutCard from "./AboutCard";
import Card from "../UI/Card";
import GiveFeedbackCard from "./GiveFeedbackCard";
import AgentFeedbackCard from "../QualityControl/AgentFeedbackCard";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { RecordingsContext } from "../RecordingsSupplier";

const RecordingsVideo = (props) => {
  // const card = 2; //1: about, 2: QA Feedback
  const [cardName, setCardName] = useState("About");
  const { videoId } = useParams();
  const [, , selectedVideoInfo] = useContext(RecordingsContext);

  const changeCardHandler = () => {
    if (cardName === "About") {
      setCardName("Feedback");
    } else {
      setCardName("About");
    }
  };

  console.log(selectedVideoInfo);
  return (
    <Card className="rev-main-container">
      <div
        className="rev-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="rev-sub-left-container">
          <Link to="/recordings">
            <button className="return-btn">
              <IoChevronBack />
              Return
            </button>
          </Link>
          <iframe
            className="rev-video"
            src="https://www.youtube.com/embed/0Kvw2BPKjz0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <AboutCard onChangeCard={changeCardHandler} />
      </div>
    </Card>
  );
};

export default RecordingsVideo;
