import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Play from "./components/Play";
import Leaderboard from "./components/Leaderboard";
import Error from "./components/Error";
import HowToPlay from "./components/HowToPlay";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("game-mode");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu setPage={setPage} page={page} />} />
          <Route path="play" element={<Play setPage={setPage} page={page} />} />
          <Route path="leaderboard" element={<Leaderboard setPage={setPage} page={page} />} />
          <Route path="how-to-play" element={<HowToPlay setPage={setPage} page={page} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
