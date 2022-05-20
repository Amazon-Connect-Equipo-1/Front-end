import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const AgentSidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/qualityControl",
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
