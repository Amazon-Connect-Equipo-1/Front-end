/*
SingleAgent.js

Authors:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 02/05/2022
Last modification date: 10/06/2022

Program that displays an agent's profile and allows the QA to comment on the agent. 
*/

//Import Modules
import "../../styles/AgentList/SingleAgent.css";
import profile_picture from "../../images/profile_icon.png";
import { useContext, useState } from "react";
import { AgentAAndQAContext } from "../AgentsAAndQASupplier";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { Pie } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { Avatar } from "@mui/material";

const SingleAgent = (props) => {
  const { t } = useTranslation();

  const [, selectedAgent, , sendFeedback, getAllAgentsList] =
    useContext(AgentAAndQAContext);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(0);
  const [giveFeedback, setGiveFeedback] = useState(false);

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

  // console.log("selected agent", selectedAgent);

  const data = {
    labels: [t("rating")],
    datasets: [
      {
        data: [selectedAgent.rating, 5.0 - selectedAgent.rating],
        backgroundColor: ["#9facbd", "rgba(54, 162, 235, 0)"],
        borderColor: ["#9facbd", "rgba(54, 162, 235, 0)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="sa-main-container">
      <p className="sa-title">{selectedAgent.name}</p>
      <div className="sa-graphics-container">
        <Avatar
          alt={selectedAgent.name}
          src={selectedAgent.profile_picture}
          className="sa-profile-picture"
          sx={{
            bgcolor: "var(--highlight-color)",
            width: 120,
            height: 120,
            fontSize: 50,
          }}
        />
        <div className="sa-rating-chart">
          <Pie data={data} />
        </div>
      </div>
      <p className="sa-text">{selectedAgent.email}</p>

      {window.localStorage.getItem("userType") === "Quality-agent" && (
        <div className="sa-info-container">
          {!giveFeedback && (
            <button
              className="sa-give-feedback-btn"
              onClick={() => {
                setGiveFeedback(true);
              }}
            >
              {t("giveFeedback")}
            </button>
          )}
          {giveFeedback && (
            <>
              <div className="sa-feedback">
                <textarea
                  className="sa-input"
                  type="text"
                  onChange={onChangeComment}
                  value={comment}
                  placeholder="Give Feedback"
                />{" "}
                <div className="sa-rating-container">
                  <p className="sa-text">{t("rating")}</p>
                  <StyledRating
                    name="sa-rating"
                    className="sa-rating"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      console.log(newValue);
                    }}
                    size="large"
                  />
                </div>
                <button
                  className="sa-send-btn"
                  onClick={() => {
                    //Verify that an agent was selected and a comment was written
                    if (selectedAgent.agent_id !== "1" && comment !== "") {
                      getAllAgentsList();
                      sendFeedback(comment, selectedAgent.email, value);
                      setComment("");
                      setGiveFeedback(false);
                    }
                    //else mostrat un pop up
                  }}
                >
                  {t("send")}
                </button>
                <button
                  className="sa-return-btn"
                  onClick={() => {
                    setGiveFeedback(false);
                  }}
                >
                  {t("return")}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleAgent;
