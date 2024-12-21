import { useState } from "react";

import Button from "./Button";
import writeToLeaderboard from "../functions/writeToLeaderboard";

function GameOverPopup({ state, dispatch, setPage }) {
  const { score, isPlaying, gameOverMessage } = state;
  const [highscoreName, setHighscoreName] = useState("");

  function handleSubmitNewHighscore() {
    writeToLeaderboard(highscoreName, state.score);
    setPage("leaderboard");
  }

  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>{gameOverMessage}</p>
        <p>Score: {score}</p>
        {
          // If new high score, add section for player to submit their name and score
          state.gameMode === "arcade" && state.newHighScore && (
            <div className="new-high-score-container">
              <p className="active-difficulty-setting">SUBMIT YOUR SCORE!</p>
              Name:
              <div style={{ padding: "1rem" }} className="nes-field is-inline">
                <input
                  type="text"
                  id="dark_field"
                  className="nes-input is-dark"
                  onChange={(e) => setHighscoreName(e.target.value)}
                />
              </div>
              <Button type="is-success" onClick={() => handleSubmitNewHighscore()}>
                Submit Score
              </Button>
            </div>
          )
        }
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
