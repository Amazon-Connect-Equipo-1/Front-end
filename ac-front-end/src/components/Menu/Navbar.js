/* Navibar

Authors:
- A01378688 Daniel Garcia Barajas
- A01750145 Miguel Ángel Pérez López
Translation:
- A01749448 Jorge Chávez Badillo
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01750185 Amy Murakami Tsutsumi

Creation date: 30/05/2022
Last modification date: 10/06/2022

Program that contains the navigation icons to use the App. 
*/

//Import Modules
import { Link } from "react-router-dom";
import { QASidebarData } from "./QASidebarData";
import { AdminSidebarData } from "./AdminSidebarData";
import { AgentSidebarData } from "./AgentSidebarData";
import "../../styles/Menu/Navbar.css";
import { IconContext } from "react-icons";
import { t } from "i18next";
import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";
import { GlobalContext } from "../GlobalSupplier";
import { useTranslation } from "react-i18next";
import { Avatar } from "@mui/material";

const Navbar = (props) => {
  //Obtain the status
  //If the agent status == "In call", the navbar should be disabled
  const [, , , , , agentStatus] = useContext(GlobalContext);

  const getSidebarData = () => {
    const sidebarData = props.sidebarData + "SidebarData";
    switch (sidebarData) {
      case "AdminSidebarData":
        return AdminSidebarData;
      case "QASidebarData":
        return QASidebarData;
      default:
        return AgentSidebarData;
    }
  };

  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const [text, setText] = React.useState("");
  const idItem = "";
  // Language
  const { t } = useTranslation();

  const username = window.localStorage.getItem("name");

  return (
    <div className="nav-container">
      <IconContext.Provider value={{ color: "var(--text-color)", size: 60 }}>
        <div className="nav-bar">
          <Link to="#" className="nav-menu-bars">
            <img className="nav-icon" />
          </Link>
          <h1 className="nav-welcome-text" id="nav-title">
            {text || t("welcomeText") + ", " + username}
          </h1>
          <Link
            to="/profile"
            onClick={(e) => {
              setText(t("welcomeText") + ", " + username);
            }}
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              pointerEvents:
                agentStatus === "" || agentStatus !== "Active" ? "all" : "none",
            }}
          >
            <Avatar
              alt={window.localStorage.getItem("name")}
              src={window.localStorage.getItem("profile_picture")}
              className="nav-user-icon"
              sx={{
                bgcolor: "var(--highlight-color)",
                height: 60,
                width: 60,
                fontSize: 20,
              }}
            />
          </Link>
        </div>
        <nav className="nav-menu">
          {/* If the agent is in call this will hide the navbar */}
          <ul className="nav-menu-items">
            {getSidebarData().map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  data-tip
                  data-for={item.title}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (item.title !== "Dashboard") {
                        setText(t(item.title));
                      } else {
                        setText(t("welcomeText") + ", " + username);
                      }
                    }}
                    style={{
                      pointerEvents:
                        agentStatus === "" || agentStatus !== "Active"
                          ? "all"
                          : "none",
                    }}
                  >
                    {item.icon}
                  </Link>
                  <ReactTooltip
                    classname="tool-tip"
                    id={item.title}
                    effect="solid"
                    backgroundColor="var(--highlight-color)"
                    textColor="var(--text-color)"
                    place="right"
                  >
                    <span>{t(item.title)}</span>
                  </ReactTooltip>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
