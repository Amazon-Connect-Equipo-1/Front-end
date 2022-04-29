import "./App.css";
import Login from "./components/Login/Login";
import Usuario from "./components/Usuario/Usuario";

function App() {
  const n = 0;
  return (
    <div className="App">
      {n === 0 && <Usuario />}
      {n === 1 && <Login />}
    </div>
  );
}

export default App;
