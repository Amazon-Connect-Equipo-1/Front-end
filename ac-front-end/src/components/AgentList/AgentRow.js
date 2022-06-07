/* Agent Row
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "../../styles/AgentList/AllAgentsList.css";
import profile_thumbnail from "../../images/profile_icon.png";
import telephone from "../../images/telephone_call.png";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

//Creates the constant Agent Row
const AgentRow = (props) => {
  const circleColor = props.isWorking ? "aal-online" : "aal-offline";

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: props.isActiveCalls
        ? "var(--online-color)"
        : "var(--offline-color)",
      color: props.isActiveCalls
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
          alt={props.agentName}
          src="/static/images/avatar/1.jpg"
          className="avatar"
          sx={{ bgcolor: "var(--highlight-color)" }}
        />
      </StyledBadge>
      {/*
      <img
        className="aal-profile-picture"
        src={profile_thumbnail}
        alt="Profile picture"
      />
  */}
      <p className="aal-text">{props.agentName}</p>
      <img
        className="aal-telephone-picture"
        src={telephone}
        alt="Telephone picture"
      />
    </button>
  );
};

export default AgentRow;
