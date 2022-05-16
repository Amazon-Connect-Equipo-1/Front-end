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
import Tutorials from "./components/Tutorials/Tutorials";
import { createContext, Suspense, useState } from "react";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import Loading from "./components/Loading";
import RecordingsSupplier from "./components/RecordingsSupplier";
import Error from "./components/Error/Error";
import AgentMain from "./components/AgentMain/AgentMain";
import QualityControl from "./components/QualityControl/QualityControl";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  //Variable that determines the user type
  const USER = "Agent"; //Amdin, QA, Agent, Client

  return (
    <div className="App">
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          {/* <Tutorials /> */}

          {/* MODULO DE CLIENTE*/}
          {USER === "Client" && <Usuario></Usuario>}

          {/*MODULO DE AGENTE*/}
          {USER === "Agent" && (
            <Router>
              <Navbar sidebarData={USER} />
              <Routes>
                <Route path="/" exact element={<AgentMain />} />
                <Route
                  path="/QualityControl"
                  exact
                  element={<QualityControl />}
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
          )}

          {/* MODULO DE ADMINISTRADOR  */}
          {USER === "Admin" && (
            <Router>
              <Navbar sidebarData={USER} />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/agents" element={<AgentList />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
          )}

          {/* MODULO DE QUALITY ANALYST  */}
          {USER === "QA" && (
            <Router>
              <Navbar sidebarData={USER} />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route
                  path="/recordings"
                  element={
                    <RecordingsSupplier>
                      <Recordings />
                    </RecordingsSupplier>
                  }
                />
                <Route path="/agents" exact element={<AgentList />} />
                <Route path="/statistics" exact element={<Statistics />} />
                <Route path="/settings" exact element={<Settings />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
          )}
        </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;

/*
{/*
      {isUser && <Usuario />}
      {!isUser && <Login />} 
      <Login />
      <Dashboard />
      <Profile />
      <AgListSet />
      <RecordingsVideo />
      <AgentList />
    </div>
      
    */
