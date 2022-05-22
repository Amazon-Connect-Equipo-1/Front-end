import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import RecoverPassword from "./components/Login/RecoverPassword";
import Profile from "./components/Profile/Profile";
import Recordings from "./components/Recordings/Recordings";
import Usuario from "./components/Usuario/Usuario";
import UserType from "./components/UserType/UserType";
import RecordingsVideo from "./components/Recordings/RecordingsVideo";
import Navbar from "./components/Menu/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Statistics from "./components/Statistics/Statistics";
import Settings from "./components/Settings/Settings";
import AgentList from "./components/AgentList/AgentList";
import { Suspense, useState } from "react";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import Loading from "./components/Loading";
import RecordingsSupplier from "./components/RecordingsSupplier";
import Error from "./components/Error/Error";
import AgentMain from "./components/AgentMain/AgentMain";
import QualityControl from "./components/QualityControl/QualityControl";
import AgentsAAndQASupplier from "./components/AgentsAAndQASupplier";
import GlobalSupplier from "./components/GlobalSupplier";
import { loadUserPreferences } from "./components/UserPreferences";
import NewPassword from "./components/Login/NewPassword";
import "amazon-connect-streams";

function App() {
  //Variable that determines the user type
  const USER = "Agent"; //Login, Admin, QA, Agent, Client

  // Load user preferences
  loadUserPreferences();

  // Language
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <div className="App">
      <GlobalSupplier>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            {/* <Tutorials /> */}

            {/* MODULO DE CLIENTE*/}
            {USER === "Client" && <Usuario />}

            {/* Login*/}
            {USER === "Login" && (
              <Router>
                <Routes>
                  <Route path="/" exact element={<UserType />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route
                    path="/forgot-password"
                    exact
                    element={<RecoverPassword />}
                  />
                  <Route
                    path="/set-new-password"
                    exact
                    element={<NewPassword />}
                  />
                  <Route path="*" element={<Error interface="Login" />} />
                </Routes>
              </Router>
            )}

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
                  <Route path="*" element={<Error interface="Agent" />} />
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
                  <Route path="*" element={<Error interface="Admin" />} />
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
                  >
                    <Route
                      path="main"
                      index
                      element={
                        <RecordingsSupplier>
                          <Recordings />
                        </RecordingsSupplier>
                      }
                    />
                    <Route path="video" element={<RecordingsVideo />} />
                  </Route>

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
                  <Route path="*" element={<Error interface="QA" />} />
                </Routes>
              </Router>
            )}
          </Suspense>
        </LocaleContext.Provider>
      </GlobalSupplier>
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
