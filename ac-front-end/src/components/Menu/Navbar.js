import { Link } from "react-router-dom";
import { QASidebarData } from "./QASidebarData";
import { AdminSidebarData } from "./AdminSidebarData";
import { AgentSidebarData } from "./AgentSidebarData";
import "../../styles/Menu/Navbar.css";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { t } from "i18next";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const Navbar = (props) => {
  //funcion para poner el nombre del admin o quality analyst

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

  const name = "Michael";

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

  return (
    <div className="nav-container">
      <IconContext.Provider value={{ color: "var(--text-color)", size: 60 }}>
        <div className="nav-bar">
          <Link to="#" className="nav-menu-bars">
            <img className="nav-icon" />
          </Link>
          <h1 className="nav-welcome-text">{t("welcomeText") + ", " + name}</h1>
          <Link to="/profile">
            <FaUserCircle className="nav-user-icon" />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {getSidebarData().map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  data-tip
                  data-for={item.title}
                >
                  <Link to={item.path}>{item.icon}</Link>
                  <ReactTooltip
                    classname="tool-tip"
                    id={item.title}
                    effect="solid"
                    backgroundColor="var(--highlight-color)"
                    textColor="var(--text-color)"
                    place="right"
                  >
                    <span>{item.title}</span>
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
