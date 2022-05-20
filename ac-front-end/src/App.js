import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgListSet from "./components/AgentList/AgListSet";
import Login from "./components/Login/Login";
import RecoverPassword from "./components/Login/RecoverPassword";
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
import AgentsAAndQASupplier from "./components/AgentsAAndQASupplier";

function App() {
  const body = document.body;

  const lightTheme = "light";
  const darkTheme = "dark";
  const darkTheme_Protanopia = "dark_protanopia";
  const darkTheme_Deuteranopia = "dark_deuteranopia";
  const darkTheme_Tritanopia = "dark_tritanopia";
  const darkTheme_Protanomaly = "dark_protanomaly";
  const darkTheme_Deuteranomaly = "dark_deuteranomaly";
  const darkTheme_Tritanomaly = "dark_tritanomaly";
  let theme;

  const smallTxtSize = "small";
  const mediumTxtSize = "medium";
  const bigTxtSize = "big";
  let txtSize;

  if (localStorage) {
    theme = localStorage.getItem("theme");
    txtSize = localStorage.getItem("txtSize");
  }

  if (
    txtSize === smallTxtSize ||
    txtSize === mediumTxtSize ||
    txtSize === bigTxtSize
  ) {
    body.classList.add(txtSize);
  } else {
    body.classList.add(smallTxtSize);
    body.classList.add(mediumTxtSize);
    body.classList.add(bigTxtSize);
  }

  if (
    theme === lightTheme ||
    theme === darkTheme ||
    theme === darkTheme_Protanopia ||
    theme === darkTheme_Deuteranopia ||
    theme === darkTheme_Tritanopia ||
    theme === darkTheme_Protanomaly ||
    theme === darkTheme_Deuteranomaly ||
    theme === darkTheme_Tritanomaly
  ) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
    body.classList.add(darkTheme_Protanopia);
    body.classList.add(darkTheme_Deuteranopia);
    body.classList.add(darkTheme_Tritanopia);
    body.classList.add(darkTheme_Protanomaly);
    body.classList.add(darkTheme_Deuteranomaly);
    body.classList.add(darkTheme_Tritanomaly);
  }

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

          {/* Login*/}
          {USER === "General" && <RecoverPassword />}

          {/*MODULO DE AGENTE*/}
          {USER === "Agent" && (
            <Router>
              <Navbar sidebarData={USER} />
              <Routes>
                <Route path="/" exact element={<AgentMain />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route
                  path="/QualityControl"
                  exact
                  element={<QualityControl />}
                />
                <Route exact path="/settings" element={<Settings />} />
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
                <Route path="/profile" exact element={<Profile />} />
                <Route
                  path="/agents"
                  element={
                    <AgentsAAndQASupplier>
                      <AgentList />
                    </AgentsAAndQASupplier>
                  }
                />
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
                <Route path="/profile" exact element={<Profile />} />
                <Route
                  path="/recordings"
                  element={
                    <RecordingsSupplier>
                      <Recordings />
                    </RecordingsSupplier>
                  }
                />
                <Route
                  path="/agents"
                  exact
                  element={
                    <AgentsAAndQASupplier>
                      <AgentList />
                    </AgentsAAndQASupplier>
                  }
                />
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
