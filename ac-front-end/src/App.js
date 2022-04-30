import "./App.css";
import Login from "./components/Login/Login";
import Recordings from "./components/Recordings/Recordings";
import RecordingsCard from "./components/Recordings/RecordingsCard";
import Usuario from "./components/Usuario/Usuario";

function App() {
  const isUser = false;
  return (
    <div>
      {/* {isUser && <Usuario />}
      {!isUser && <Login />} */}
      <Login />
      <Recordings />
    </div>
  );
}

export default App;
