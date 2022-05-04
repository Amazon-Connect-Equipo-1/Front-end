import "./App.css";
import AgListSet from "./components/AgentList/AgListSet";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AboutCard from "./components/Recordings/AboutCard";
import Recordings from "./components/Recordings/Recordings";
import RecordingsCard from "./components/Recordings/RecordingsCard";
import Usuario from "./components/Usuario/Usuario";
import UserType from "./components/UserType/UserType";
import AgentList from "./components/AgentList/AgentList";
import GiveFeedbackCard from "./components/Recordings/GiveFeedbackCard";
import AgentFeedbackCard from "./components/Recordings/AgentFeedbackCard";
import RecordingsVideo from "./components/Recordings/RecordingsVideo";

function App() {
  const isUser = false;
  return (
    <div>
      {/*
      {isUser && <Usuario />}
      {!isUser && <Login />} 
      <Login />
      
      <Profile />
      <AgListSet />
      <AgentList />
    */}
      <RecordingsVideo />
    </div>
  );
}

export default App;
