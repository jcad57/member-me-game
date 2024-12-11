import MainMenu from "./MainMenu";
import GameModes from "./GameModes";
import Settings from "./Settings";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

import { useReducer, useState } from "react";
import { gameSettingsInitialState, gameSettingsReducer } from "../hooks/gameSettingsReducer";
import { gameplayVariablesInitialState, gameplayVariablesReducer } from "../hooks/gameplayVariablesReducer";

const initialState = {
  gameSettings: gameSettingsInitialState,
  gameplayVariables: gameplayVariablesInitialState,
};
// Combine the reducers
const combinedReducer = (state, action) => ({
  gameSettings: gameSettingsReducer(state.gameSettings, action),
  gameplayVariables: gameplayVariablesReducer(state.gameplayVariables, action),
});

function Play() {
  const [state, dispatch] = useReducer(combinedReducer, initialState);
  const [page, setPage] = useState("main-menu");

  console.log(state);
  if (page === "main-menu") return <MainMenu />;
  if (page === "game-mode")
    return <GameModes state={state} dispatch={dispatch} allGameModes={allGameModes} setPage={setPage} />;
  if (page === "settings") return <Settings dispatch={dispatch} state={state} setPage={setPage} />;
  if (page === "play") return <Game dispatch={dispatch} state={state} setPage={setPage} />;
  if (page === "leaderboard") return <Leaderboard setPage={setPage} />;
}

export default Play;
