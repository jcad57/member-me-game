import { useEffect } from "react";
import Button from "./Button";
import Grid from "./Grid";
import Hud from "./Hud";
import GameOverDialogue from "./GameOverDialogue";

function Game({ state, dispatch }) {
  // Handle Gameplay Timer
  useEffect(() => {
    if (!state.isPlaying || state.timeLeft <= 0 || state.timer === null) return;

    const gameTimer = setInterval(() => {
      // Check if out of time
      if (state.timeLeft === 1) {
        dispatch({
          type: "UPDATE_MULTIPLE",
          payload: { isPlaying: false, gameWin: false, gameOverMessage: "You ran out of time." },
        });
        return;
      }
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
      <GameOverDialogue state={state} dispatch={dispatch} />
    </div>
  );
}

export default Game;
