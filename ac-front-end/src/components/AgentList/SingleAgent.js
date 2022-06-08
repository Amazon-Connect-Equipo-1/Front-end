/* Single Agent
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/SingleAgent.css";
import profile_picture from "../../images/profile_icon.png";
import percent from "../../images/porcentaje.png";
import { useContext, useState } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const SingleAgent = (props) => {
  const [, selectedAgent, , sendFeedback] = useContext(AgentAAndQAContext);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(0);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "var(--highlight-color)",
    },
    "& .MuiRating-iconHover": {
      color: "var(--highlight-color)",
    },
  });

  const onChangeComment = (event) => {
    console.log(event.target.value);
    setComment(event.target.value);
  };

  console.log(selectedAgent);

  return (
    <div className="sa-main-container">
      <p className="sa-title">{selectedAgent.name}</p>
      <div className="sa-graphics-container">
        <img
          className="sa-profile-picture"
          src={profile_picture}
          alt="Profile picture"
        />
        <img className="sa-percent-picture" src={percent} alt="%" />
      </div>
      <div className="sa-info-container">
        <StyledRating
          name="sa-rating"
          className="sa-rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />

        <p className="sa-text">{selectedAgent.description}</p>
        {window.localStorage.getItem("userType") === "Quality-agent" && (
          <div className="sa-feedback">
            <textarea
              className="sa-input"
              type="text"
              onChange={onChangeComment}
            />
            <button
              className="sa-send-btn"
              onClick={() => {
                sendFeedback(comment);
              }}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleAgent;
