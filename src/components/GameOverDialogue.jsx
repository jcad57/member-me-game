import Button from "./Button";

function GameOverDialogue({ state, dispatch }) {
  const { score, isPlaying, gameWin, gameOverMessage } = state;

  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>{gameOverMessage}</p>
        <p>Score: {score}</p>
        <div className="btn-container">
          <Button type="is-primary" onClick={() => dispatch({ type: "START_NEW_GAME" })}>
            Play Again
          </Button>
          <Button type="is-warning" onClick={() => dispatch({ type: "CHANGE_GAME_STATUS", payload: "game-mode" })}>
            Menu
          </Button>
        </div>
      </div>
    );
  }
}

export default GameOverDialogue;
