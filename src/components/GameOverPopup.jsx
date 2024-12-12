import Button from "./Button";

function GameOverPopup({ state, dispatch, setPage }) {
  const { score, isPlaying, gameOverMessage } = state;

  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>{gameOverMessage}</p>
        <p>Score: {score}</p>
        <div className="btn-container">
          <Button type="is-primary" onClick={() => dispatch({ type: "START_NEW_GAME" })}>
            Play Again
          </Button>
          <Button type="is-warning" onClick={() => setPage("game-mode")}>
            Menu
          </Button>
        </div>
      </div>
    );
  }
}

export default GameOverPopup;
