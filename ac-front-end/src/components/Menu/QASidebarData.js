/* 
QASidebarData.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo

Creation date: 15/05/2022
Last modification date: 15/05/2022

(Decripción)
*/

//Import Modules
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { VscRecord } from "react-icons/vsc";
import { t } from "i18next";

export const QASidebarData = [
  {
    title: "Dashboard",
    path: "/qa",
    icon: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Recordings",
    path: "/recordings",
    icon: <VscRecord />,
    cName: "nav-text",
  },
  {
    title: "Agent List",
    path: "/agents",
    icon: <FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <FiTrendingUp />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsSharp />,
    cName: "nav-text",
  },
];
