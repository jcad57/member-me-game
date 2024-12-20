import GameModes from "./GameModes";
import Settings from "./Settings";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

/* TODO: 
1. Fix "exposed" API key (secrets detected) per warning from github
2. Clean up/refactor Settings component 
*/

import defaultSettings from "../data/default-settings";
const allGameModes = defaultSettings.defaultSettings;

import { useReducer } from "react";
import { gameReducer, initialState } from "../hooks/gameReducer";

function Play({ setPage, page }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  if (page === "game-mode")
    return <GameModes state={state} dispatch={dispatch} allGameModes={allGameModes} setPage={setPage} />;
  if (page === "settings") return <Settings dispatch={dispatch} state={state} setPage={setPage} />;
  if (page === "play") return <Game dispatch={dispatch} state={state} setPage={setPage} />;
  if (page === "leaderboard") return <Leaderboard setPage={setPage} />;
}

export default Play;
