import { useEffect } from "react";
import Button from "./Button";
import Grid from "./Grid";
import Hud from "./Hud";
import GameOverPopup from "./GameOverPopup";
import Bonuses from "./Bonuses";

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
    <>
      <div style={{ background: `#${state.theme[0]}` }} className="game-container ">
        <div className="content-container">
          <Hud lives={state.lives} score={state.score} timer={state.timeLeft} state={state} />
          <Grid state={state} dispatch={dispatch} />

          <div className="btn-container">
            <Button type="is-warning" onClick={() => dispatch({ type: "END_GAME" })}>
              End Game
            </Button>
          </div>
        </div>
      </div>
      {/* Game over pop up that displays score and options */}
      <GameOverPopup state={state} dispatch={dispatch} setPage={setPage} />
      <Bonuses state={state} />
    </>
  );
}

export default Game;
