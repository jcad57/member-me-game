import { useEffect, useState } from "react";
import Button from "./Button";
import Grid from "./Grid";
import Hud from "./Hud";
import GameOverDialogue from "./GameOverDialogue";

function Game({ state, dispatch }) {
  const [timer, setTimer] = useState(state.timer ? 120 : null);

  useEffect(() => {
    if (!state.isPlaying || timer <= 0) return;

    const gameTimer = setInterval(() => {
      if (timer === 1) {
        setTimer(0);
        dispatch({ type: "END_GAME" });
        return;
      }
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(gameTimer);
  }, [timer, state.isPlaying, dispatch]);

  return (
    <div style={{ background: `#${state.theme[0]}` }} className="game-container  ">
      <div className="">
        <Hud lives={state.lives} score={state.score} timer={timer} state={state} />
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
