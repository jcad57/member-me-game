import themes from "../data/themes";
import ThemeIcon from "./ThemeIcon";

export default function SettingsItem({setting, state, dispatch}){
  
  return (
    <>
    {setting === "theme" && (
            <div className="content-section">
              <h2 className="section-heading">Theme</h2>
              <div className="theme-icon-container">
                {Object.entries(themes.themes).map((theme, i) => (
                  <ThemeIcon theme={theme} state={state} key={i} dispatch={dispatch} />
                ))}
              </div>
            </div>
          )}
        {setting === "difficulty" && (
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
        {setting === "timer" && (
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
        {setting === "sound" && (
          <div className="content-section">
            <h3 className="section-heading">Sound</h3>
            <div className="settings-list">
              <div
                className={state.sound ? `active-difficulty-setting` : undefined}
                onClick={() => dispatch({ type: "CHANGE_SOUND", payload: true })}>
                ON
              </div>
              <div
                className={!state.sound ? `active-difficulty-setting` : undefined}
                onClick={() => dispatch({ type: "CHANGE_SOUND", payload: false })}>
                OFF
              </div>
            </div>
          </div>
        )}
          </>
  )
}