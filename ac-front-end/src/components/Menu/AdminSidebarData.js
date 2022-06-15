/* 
AdminSidebarData.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo

Creation date: 15/05/2022
Last modification date: 15/05/2022

Program that displays the sidebar of an Admin account.
*/

//Import Modules
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { VscRecord } from "react-icons/vsc";

export const AdminSidebarData = [
  {
    title: "Dashboard",
    navBar: "Dashboard",
    path: "/admin",
    icon: <MdDashboard />,
    cName: "nav-text",
  },

  {
    title: "Agent List",
    navBar: "Agent List",
    path: "/agents",
    icon: <FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Statistics",
    navBar: "Statistics",
    path: "/statistics",
    icon: <FiTrendingUp />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    navBar: "Settings",
    path: "/settings",
    icon: <IoSettingsSharp />,
    cName: "nav-text",
  },
];
