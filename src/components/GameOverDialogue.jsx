function GameOverDialogue({ score, isPlaying }) {
  if (!isPlaying) {
    return (
      <div className="game-over-dialogue-container nes-container is-centered">
        <p>YOU WON</p>
        <p>Score: {score}</p>
      </div>
    );
  }
}

export default GameOverDialogue;
