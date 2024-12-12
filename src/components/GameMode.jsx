function GameMode({ name, description, state, dispatch }) {
  return (
    <div
      className={`game-mode-cell ${state.gameMode === name ? "active-game-mode" : ""}`}
      onClick={() => dispatch({ type: "CHANGE_GAME_MODE", payload: name })}>
      <h2 className="fnt-size-md text-upper">{name}</h2>
      <p className="fnt-size-sm">{description}</p>
    </div>
  );
}

export default GameMode;
