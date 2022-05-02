import "./App.css";
import AgListSet from "./components/AgentList/AgListSet";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AboutCard from "./components/Recordings/AboutCard";
import Recordings from "./components/Recordings/Recordings";
import RecordingsCard from "./components/Recordings/RecordingsCard";
import Usuario from "./components/Usuario/Usuario";
import UserType from "./components/UserType/UserType";

function App() {
  const isUser = false;
  return (
    <div>
      {
        /* {isUser && <Usuario />}
      {!isUser && <Login />} 
      <Login />
      <Recordings />
      <Profile />
      <AboutCard />
      <AgListSet />
      <UserType />
      }*/
        <UserType />
      }
    </div>
  );
}

export default App;
