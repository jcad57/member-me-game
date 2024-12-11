import Button from "./Button";

function GameOverDialogue({ state, dispatch, handlePlayAgain }) {
  const { score, isPlaying, gameWin, gameOverMessage } = state;
  console.log(gameOverMessage)
  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>{gameOverMessage}</p>
        <p>Score: {score}</p>
        <div className="btn-container">
          <Button type="is-primary" onClick={handlePlayAgain}>
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
