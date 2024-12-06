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
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(gameTimer);
  }, [timer, state.isPlaying]);

  return (
    <div style={{ background: `#${state.theme[0]}` }} className="game-container  ">
      <div className="">
        <Hud lives={state.lives} score={state.score} timer={timer} state={state} />
        <Grid state={state} dispatch={dispatch} />
      </div>
      <div className="btn-container">
        <Button type="is-warning">End Game</Button>
      </div>
      <GameOverDialogue score={state.score} isPlaying={state.isPlaying} />
    </div>
  );
}

export default Game;
