import Button from "./Button";
import GameMode from "./GameMode";

import { useState } from "react";
import { useNavigate } from "react-router";

function GameModes({ dispatch, allGameModes, state, setPage }) {
  let navigate = useNavigate();
  const [activeGameMode, setActiveGameMode] = useState("arcade");
  return (
    <div className="game-container place-items-center">
      <div className="content-container">
        <h1 className="game-subtitle heading">Game Mode</h1>
        <div className="game-mode-container grid-col-2">
          {allGameModes.map((gameMode, i) => (
            <GameMode
              key={i}
              state={state}
              dispatch={dispatch}
              name={gameMode.name}
              description={gameMode.description}
              activeGameMode={activeGameMode}
              setActiveGameMode={setActiveGameMode}
            />
          ))}
        </div>
        <div className="btn-container">
          <Button type="is-primary" onClick={() => setPage("settings")}>
            SELECT
          </Button>
          <Button type="is-warning" onClick={() => navigate(-1)}>
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GameModes;
