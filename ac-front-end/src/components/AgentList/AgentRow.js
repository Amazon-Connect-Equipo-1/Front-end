/*
AgentRow.js

Authors:
- A01749448 Jorge Chávez Badillo

Creation date: 02/05/2022
Last modification date: 09/06/2022

(Descripción)
*/

//Import Modules
import "../../styles/AgentList/AllAgentsList.css";
import profile_thumbnail from "../../images/profile_icon.png";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { CgPhone } from "react-icons/cg";

//Creates the constant Agent Row
const AgentRow = (props) => {
  const circleColor = props.isWorking ? "aal-online" : "aal-offline";

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor:
        props.status === "Active" || props.status === "In call"
          ? "var(--online-color)"
          : "var(--offline-color)",
      color:
        props.status === "Active" || props.status === "In call"
          ? "var(--online-color)"
          : "var(--offline-color)",
      boxShadow: `0 0 0 2px var(--sub-card-background)`,
    },
  }));
  return (
    <button
      onClick={() => props.onSelectAgent(props.id)}
      className="aal-row-container"
    >
      <StyledBadge
        overlap="circular"
        className="aal-profile-picture"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt={props.name}
          src={props.profile_picture}
          className="avatar"
          sx={{ bgcolor: "var(--highlight-color)" }}
        />
      </StyledBadge>
      <p className="aal-text">{props.name}</p>
      {props.status === "In call" && <CgPhone />}
    </button>
  );
};

export default AgentRow;
