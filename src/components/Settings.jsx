import themes from "../data/themes";
import Button from "./Button";
import ThemeIcon from "./ThemeIcon";

function Settings({ state, dispatch, setPage }) {
  function handleStartGame() {
    setPage("play");
    dispatch({ type: "START_NEW_GAME" });
  }

  return (
    <div className="game-container place-items-center">
      <div className="content-container">
        <h1 className="game-subtitle heading capitalize">{state.gameMode}</h1>
        <p className="game-description">{state.description}</p>
        <div className="content-container nes-container is-dark">
          {state.changeableSettings.includes("theme") && (
            <div className="content-section">
              <h2 className="section-heading">Theme</h2>
              <div className="theme-icon-container">
                {Object.entries(themes.themes).map((theme, i) => (
                  <ThemeIcon theme={theme} state={state} key={i} dispatch={dispatch} />
                ))}
              </div>
            </div>
          )}
          {state.changeableSettings.includes("difficulty") && (
            <div className="content-section">
              <h3 className="section-heading">Difficulty</h3>
              <div className="settings-list">
                <div
                  className={state.difficulty === "easy" ? `active-difficulty-setting` : undefined}
                  onClick={() => dispatch({ type: "CHANGE_DIFFICULTY", payload: "easy" })}>
                  EASY
                </div>
                <div
                  className={state.difficulty === "normal" ? `active-difficulty-setting` : undefined}
                  onClick={() => dispatch({ type: "CHANGE_DIFFICULTY", payload: "normal" })}>
                  NORMAL
                </div>
                <div
                  className={state.difficulty === "hard" ? `active-difficulty-setting` : undefined}
                  onClick={() => dispatch({ type: "CHANGE_DIFFICULTY", payload: "hard" })}>
                  HARD
                </div>
              </div>
            </div>
          )}
          {state.changeableSettings.includes("timer") && (
            <div className="content-section">
              <h3 className="section-heading">Timer</h3>
              <div className="settings-list">
                <div
                  className={state.timer ? `active-difficulty-setting` : undefined}
                  onClick={() => dispatch({ type: "CHANGE_TIMER", payload: true })}>
                  ON
                </div>
                <div
                  className={!state.timer ? `active-difficulty-setting` : undefined}
                  onClick={() => dispatch({ type: "CHANGE_TIMER", payload: false })}>
                  OFF
                </div>
              </div>
            </div>
          )}
        </div>
        <Button type="is-primary" onClick={() => handleStartGame()}>
          START
        </Button>
        <Button type="is-warning" onClick={() => setPage("game-mode")}>
          BACK
        </Button>
      </div>
    </div>
  );
}

export default Settings;
