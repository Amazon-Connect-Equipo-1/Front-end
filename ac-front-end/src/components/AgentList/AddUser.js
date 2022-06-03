import React from "react";
import "../../styles/AgentList/AddUser.css";
import AddAgent from "./AddAgent";
import AddManager from "./AddManager";
import { createContext, Suspense, useState } from "react";

const AddUser = () => {
  const [state, setState] = useState("main");
  const changeAgent = () => {
    setState("agent");
  };
  const changeAQA = () => {
    setState("manager");
  };
  const changeMain = () => {
    setState("main");
  };
  return (
    <div className="adu-main-container">
      <div className="adu-container">
        {state === "main" && (
          <div className="adu-container">
            <p className="adu-title">Select role to add</p>
            <button className="adu-send-btn" onClick={changeAgent}>
              Agent
            </button>
            <button className="adu-send-btn" onClick={changeAQA}>
              Admin/QA
            </button>
          </div>
        )}
        {state === "manager" && (
          <div>
            <AddManager onChange={changeMain} />
          </div>
        )}
        {state === "agent" && (
          <div>
            <AddAgent onChange={changeMain} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
