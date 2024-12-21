import Button from "./Button";
import SettingsItem from "./SettingsItem";

function Settings({ state, dispatch, setPage }) {
  function handleStartGame() {
    setPage("play");
    dispatch({ type: "START_NEW_GAME" });
  }

  return (
    <div className="game-container place-items-center">
      <div className="content-container">
        <h1 className="game-subtitle heading capitalize">{state.gameMode}</h1>
        {state.extraInfo.length > 0 && <h2 className="game-mode-extra-info fnt-clr-yellow">{state.extraInfo}</h2>}
        <div className="content-container nes-container is-dark">
          {state.changeableSettings.map((setting, i) => (
            <SettingsItem setting={setting} key={i} state={state} dispatch={dispatch} />
          ))}
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
