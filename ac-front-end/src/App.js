/* 
App.js

Authors:
- A01750145 Miguel Ángel Pérez López
- A01749448 Jorge Chávez Badillo
- A01378688 Daniel Garcia Barajas
- A01749373 Ariadna Jocelyn Guzmán Jiménez
- A01379868 Jared Abraham Flores Guarneros
- A01750185 Amy Murakami Tsutsumi


Creation date: 10/04/2022
Last modification date: 10/06/2022

Program that stores the web application and 
its components to deploy them.
*/

//Import Modules
import "./App.css";
import Login from "./components/Login/Login";
import RecoverPassword from "./components/Login/RecoverPassword";
import Register from "./components/Login/Register";
import Profile from "./components/Profile/Profile";
import Recordings from "./components/Recordings/Recordings";
import Usuario from "./components/Usuario/Usuario";
import UserType from "./components/UserType/UserType";
import RecordingsVideo from "./components/Recordings/RecordingsVideo";
import Navbar from "./components/Menu/Navbar";
import Dashboard from "./components/Dashboard/DashboardQuality-agent";
import Statistics from "./components/Statistics/StatisticsQuality-agent";
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
import GlobalSupplier, { GlobalContext } from "./components/GlobalSupplier";
import NewPassword from "./components/Login/NewPassword";
import "amazon-connect-streams";
import { Navigate, Route, Router, Routes, useLocation } from "react-router-dom";
import { AuthenticationContext } from "./components/Authentication";
import AgentRecordingsSupplier from "./components/AgentRecordingsSupplier";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";
import RequireAuthentication from "./components/RequireAuthentication";
import NewPasswordForm from "./components/Login/NewPasswordForm";
import AgentRecordings from "./components/AgentRecordings/AgentRecordings";
import { loadUserPreferences } from "./components/UserPreferences";
import { useTime } from "react-timer-hook";
import musica from "./music/mii.mp3";
import DashboardAdmin from "./components/Dashboard/DashboardAdmin";
import StatisticsAdmin from "./components/Statistics/StatisticsAdmin";
import StatisticsQA from "./components/Statistics/StatisticsQuality-agent";
import DashboardQA from "./components/Dashboard/DashboardQuality-agent";

function App() {
  const deleteObj = () => {
    const token = window.localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://backtest.bankonnect.link/keyclick/deleteObjects",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const refreshSystem = () => {
    deleteObj();
    logout();

    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("userType");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("email");
    window.location.reload();
  };
  //Variables that control time
  const { seconds, minutes, hours, ampm } = useTime({ format: "24-hour" });

  // Variable that determines the types of users to protect the routes
  const USER = {
    Admin: "Admin",
    QA: "Quality-agent",
    Agent: "Agent",
    Client: "Client",
  };

  var music = window.localStorage.getItem("music");
  // Language
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  // Authentication
  const [user, , userType, , logout] = useContext(AuthenticationContext);

  //console.log(user);
  //console.log(userType);
  const getUserType = window.localStorage.getItem("userType");

  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    if (document.body.classList[0] === "Dark") {
      document.body.classList.replace("Dark", "dark");
    }

    if (
      performance.getEntriesByType("navigation")[0].type &&
      window.localStorage.getItem("id") !== null
    ) {
      loadUserPreferences(window.localStorage.getItem("id"));
    }
    //const music = window.localStorage.setItem("music", "pause");
    music = localStorage.getItem("music");
  }, []);

  return (
    <div className="App">
      {hours === 0 && minutes === 57 && seconds === 59 && refreshSystem()}

      {music === "play" && (
        <div>
          {" "}
          <audio src={musica} autoPlay loop></audio>
        </div>
      )}
      <GlobalSupplier>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            {/*user !== null && <Navbar sidebarData={userType} />*/}
            {getUserType === USER.Admin && <Navbar sidebarData={USER.Admin} />}
            {getUserType === USER.QA && <Navbar sidebarData="QA" />}
            {getUserType === USER.Agent && <Navbar sidebarData={USER.Agent} />}
            <Routes>
              <Route path="/" element={<Layout />}>
                {/*Public Routes*/}
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<RecoverPassword />} />
                <Route path="confirm-password" element={<NewPasswordForm />} />
                {/* <Route path="client" element={<Usuario />} /> */}
                <Route path="register-user" element={<Register />} />
                <Route path="confirm-email" element={<Usuario />} />

                {/*Routes for all types of users*/}
                <Route
                  element={
                    <RequireAuthentication
                      allowedUsers={[USER.Admin, USER.QA, USER.Agent]}
                    />
                  }
                >
                  <Route path="profile" element={<Profile />} />
                  <Route path="settings" element={<Settings />} />
                  <Route
                    path="/"
                    element={
                      <Navigate
                        to={
                          (getUserType === USER.Admin && "/admin") ||
                          (getUserType === USER.QA && "/qa") ||
                          (getUserType === USER.Agent && "/agent") ||
                          (user === null && "/login")
                        }
                        state={{ from: location }}
                        replace
                      />
                    }
                  />
                </Route>

                {/*Admin Routes*/}
                <Route
                  element={
                    <RequireAuthentication allowedUsers={[USER.Admin]} />
                  }
                >
                  <Route path="admin" element={<DashboardAdmin />} />
                </Route>

                {/*Routes shared by QA and Admin*/}
                <Route
                  element={
                    <RequireAuthentication
                      allowedUsers={[USER.Admin, USER.QA]}
                    />
                  }
                >
                  <Route
                    path="agents"
                    element={
                      <AgentsAAndQASupplier>
                        <AgentList />
                      </AgentsAAndQASupplier>
                    }
                  />
                  <Route
                    path="statistics"
                    element={
                      (getUserType === USER.Admin && <StatisticsAdmin />) ||
                      (getUserType === USER.QA && <StatisticsQA />)
                    }
                  />
                </Route>

                {/*QA Routes*/}
                <Route
                  element={<RequireAuthentication allowedUsers={[USER.QA]} />}
                >
                  <Route path="qa" element={<DashboardQA />} />
                  <Route
                    path="recordings"
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
                    <Route path="video/:id" element={<RecordingsVideo />} />
                  </Route>
                </Route>

                {/*Agent Routes*/}
                <Route
                  element={
                    <RequireAuthentication allowedUsers={[USER.Agent]} />
                  }
                >
                  <Route path="agent" element={<AgentMain />} />
                  <Route
                    path="agent-qa"
                    element={
                      <RecordingsSupplier>
                        <QualityControl />
                      </RecordingsSupplier>
                    }
                  >
                    <Route
                      path="agent-video/:id"
                      element={
                        <RecordingsSupplier>
                          <RecordingsVideo />
                        </RecordingsSupplier>
                      }
                    />
                  </Route>
                </Route>

                {/*Catch all*/}
                <Route path="*" element={<Error interface={userType} />} />
              </Route>
            </Routes>
          </Suspense>
        </LocaleContext.Provider>
      </GlobalSupplier>
    </div>
  );
}

export default App;
