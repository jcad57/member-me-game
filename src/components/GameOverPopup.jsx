import { useState } from "react";

import Button from "./Button";

function GameOverPopup({ state, dispatch, setPage }) {
  const { score, isPlaying, gameOverMessage } = state;
  const [highscoreName, setHighscoreName] = useState("");

  function handleSubmitNewHighscore() {
    dispatch({type: "SUBMIT_NEW_HIGHSCORE", payload: highscoreName})
    setPage("leaderboard")
  }

  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>{gameOverMessage}</p>
        <p>Score: {score}</p>
        {state.newHighScore && 
        <div className="new-high-score-container"><p className="active-difficulty-setting">SUBMIT YOUR SCORE!</p>
        Name:
          <div style={{padding: "1rem"}} className="nes-field is-inline">
            <input type="text" id="dark_field" className="nes-input is-dark" onChange={(e)=>setHighscoreName(e.target.value)} />
          </div>
          <Button type="is-success" onClick={()=>handleSubmitNewHighscore()}>Submit Score</Button>
        </div>
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
