import { Link } from "react-router-dom";
import logo from "../../images/logo_bbva.png";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  //funcion para poner el nombre del admin o quality analyst
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: 60 }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <img src={logo} className="nav-icon" />
          </Link>
          <h1 className="nav-welcome-text">Welcome back, Michael</h1>
          <FaUserCircle className="nav-user-icon" />
        </div>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
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
}

export default Navbar;
