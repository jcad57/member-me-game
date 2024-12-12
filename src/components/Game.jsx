import { useEffect } from "react";
import Button from "./Button";
import Grid from "./Grid";
import Hud from "./Hud";
import GameOverPopup from "./GameOverPopup";

function Game({ state, dispatch, setPage }) {
  // Handle Gameplay Timer
  useEffect(() => {
    if (!state.isPlaying || state.timeLeft <= 0 || state.timer === null) return;

    const gameTimer = setInterval(() => {
      dispatch({ type: "DECREMENT_TIME_LEFT" });
    }, 1000);

    return () => clearInterval(gameTimer);
  }, [state.timeLeft, state.isPlaying, state.timer, dispatch]);

  return (
    <div style={{ background: `#${state.theme[0]}` }} className="game-container  ">
      <div className="">
        <Hud lives={state.lives} score={state.score} timer={state.timeLeft} state={state} />
        <Grid state={state} dispatch={dispatch} />
      </div>
      <div className="btn-container">
        <Button type="is-warning" onClick={() => dispatch({ type: "END_GAME" })}>
          End Game
        </Button>
      </div>
      {/* Game over pop up that displays score and options */}
      <GameOverPopup state={state} dispatch={dispatch} setPage={setPage} />
    </div>
  );
}

export default Game;
