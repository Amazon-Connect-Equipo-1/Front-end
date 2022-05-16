import { Link } from "react-router-dom";
import logo from "../../images/logo_bbva.png";
import { QASidebarData } from "./QASidebarData";
import { AdminSidebarData } from "./AdminSidebarData";
import { AgentSidebarData } from "./AgentSidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

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

  return (
    <>
      <IconContext.Provider value={{ color: "var(--text-color)", size: 60 }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <img className="nav-icon" />
          </Link>
          <h1 className="nav-welcome-text">Welcome back, Michael</h1>
          <FaUserCircle className="nav-user-icon" />
        </div>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {getSidebarData().map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.icon}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
