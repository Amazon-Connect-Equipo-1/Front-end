/*
SingleAgent.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 02/05/2022
Last modification date: 10/06/2022

(Descripción)
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
      <p className="sa-text">{selectedAgent.description}</p>
      <div className="sa-info-container">
        <p className="sa-email">
          {t("email")}
          <span>
            {" "}
            {selectedAgent.email ? selectedAgent.email : "email@amazon.com"}
          </span>
        </p>
        {window.localStorage.getItem("userType") === "Quality-agent" && (
          <p className="sa-text sa-give-feedback">{t("giveFeedback")}</p>
        )}
        {window.localStorage.getItem("userType") === "Quality-agent" && (
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
        )}
        {/* {window.localStorage.getItem("userType") === "Admin" && } */}
        <p className="sa-text">{selectedAgent.description}</p>
        {window.localStorage.getItem("userType") === "Quality-agent" && (
          <div className="sa-feedback">
            <textarea
              className="sa-input"
              type="text"
              onChange={onChangeComment}
              value={comment}
              placeholder="Give Feedback"
            />
            <button
              className="sa-send-btn"
              onClick={() => {
                console.log("clcik en email de agent", selectedAgent.email);
                sendFeedback(comment, selectedAgent.email, value);
                setComment("");
              }}
            >
              {t("send")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleAgent;
