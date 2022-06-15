/* 
AgentSidebarData.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01379868 Jared Abraham Flores Guarneros
traduction:
- A01749448 Jorge Chávez Badillo

Creation date: 15/05/2022
Last modification date: 15/05/2022

Program that displays the sidebar of an Agent account.
*/

//Import Modules
import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { t } from "i18next";

export const AgentSidebarData = [
  {
    title: "Dashboard",
    path: "/agent",
    icon: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/agent-qa",
    icon: <MdOutlineCheckBox />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsSharp />,
    cName: "nav-text",
  },
];
