import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgListSet from "./components/AgentList/AgListSet";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AboutCard from "./components/Recordings/AboutCard";
import Recordings from "./components/Recordings/Recordings";
import RecordingsCard from "./components/Recordings/RecordingsCard";
import Usuario from "./components/Usuario/Usuario";
import UserType from "./components/UserType/UserType";
import GiveFeedbackCard from "./components/Recordings/GiveFeedbackCard";
import AgentFeedbackCard from "./components/Recordings/AgentFeedbackCard";
import RecordingsVideo from "./components/Recordings/RecordingsVideo";
import Navbar from "./components/Menu/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Statistics from "./components/Statistics/Statistics";
import Settings from "./components/Settings/Settings";
import AgentList from "./components/AgentList/AgentList";
import { createContext, useState } from "react";

function App() {
  return (
    <div classname="App">
      {/*
      {isUser && <Usuario />}
      {!isUser && <Login />} 
      <Login />
      <Dashboard />
      <Profile />
      <AgListSet />
      <RecordingsVideo />
      <AgentList />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/recordings" element={<Recordings />} />
          <Route path="/agents" element={<AgentList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      
    */}
      <Settings />
    </div>
  );
}

export default App;
