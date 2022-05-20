import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { VscRecord } from "react-icons/vsc";

export const QASidebarData = [
  {
    title: "Dashboard",
    path: "/",
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
