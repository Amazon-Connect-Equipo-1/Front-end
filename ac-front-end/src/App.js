/* APP
Authors:
        A01777771 Stephen Strange*/

//Import Modules
import "./App.css";
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
import { Fragment, Suspense, useContext, useEffect, useState } from "react";
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
import { Route, Router, Routes } from "react-router-dom";
import { AuthenticationContext } from "./components/Authentication";
import AgentRecordingsSupplier from "./components/AgentRecordingsSupplier";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //Variable that determines the user type
  //const USER = "Client"; //Login, Admin, QA, Agent, Client

  // Load user preferences
  loadUserPreferences();

  // Language
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  // Authentication
  const [user, userType] = useContext(AuthenticationContext);
  //console.log(user);
  //console.log(userType);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <GlobalSupplier>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            {user === null && (
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<RecoverPassword />} />
              </Routes>
            )}
            {
              /*ADMIN MODULE*/
              user !== null && userType === "Admin" && (
                <Fragment>
                  <Navbar sidebarData={userType} />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
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
                </Fragment>
              )
            }
            {
              /*QA MODULE*/
              user !== null && userType === "QA" && (
                <Fragment>
                  <Navbar sidebarData={userType} />
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
                    <Route path="/statistics" exact element={<Statistics />} />
                    <Route path="/settings" exact element={<Settings />} />
                    <Route path="*" element={<Error interface="QA" />} />
                  </Routes>
                </Fragment>
              )
            }
            {
              /*AGENT MODULE*/
              user !== null && userType === "Agent" && (
                <Fragment>
                  <Navbar sidebarData={userType} />
                  <Routes>
                    <Route path="/" element={<AgentMain />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                      path="/QualityControl"
                      exact
                      element={
                        <AgentRecordingsSupplier>
                          <QualityControl />
                        </AgentRecordingsSupplier>
                      }
                    />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Error interface="Agent" />} />
                  </Routes>
                </Fragment>
              )
            }
          </Suspense>
        </LocaleContext.Provider>
      </GlobalSupplier>
    </div>
  );
}

export default App;
