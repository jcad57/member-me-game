import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Play from "./components/Play";
import Leaderboard from "./components/Leaderboard";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="play" element={<Play />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
