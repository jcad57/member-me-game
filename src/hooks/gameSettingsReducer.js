import defaultSettings from "../data/default-settings";

// Extract default settings from the file above
const allGameModes = defaultSettings.defaultSettings;

// Set the default settings to the first game mode ( allGameModes[0] ) in 'defaultSettings' which is Arcade mode.
export const gameSettingsInitialState = {
  gameMode: allGameModes[0].name,
  description: allGameModes[0].description,
  changeableSettings: allGameModes[0].changeableSettings,
  activeTheme: "blueTheme",
  theme: allGameModes[0].theme,
  difficulty: allGameModes[0].difficulty,
  timer: allGameModes[0].timer,
  totalLives: allGameModes[0].lives,
  sound: allGameModes[0].sound,
};

export const gameSettingsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATUS": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "CHANGE_GAME_MODE": {
      let gameModeIndex;
      if (action.payload === "arcade") gameModeIndex = 0;
      if (action.payload === "casual") gameModeIndex = 1;
      if (action.payload === "versus") gameModeIndex = 2;
      if (action.payload === "zen") gameModeIndex = 3;
      return {
        ...state,
        gameMode: allGameModes[gameModeIndex].name,
        difficulty: allGameModes[gameModeIndex].difficulty,
        timer: allGameModes[gameModeIndex].time,
        lives: allGameModes[gameModeIndex].lives,
        sound: allGameModes[gameModeIndex].sound,
        changeableSettings: allGameModes[gameModeIndex].changeableSettings,
        description: allGameModes[gameModeIndex].description,
      };
    }
    case "CHANGE_THEME": {
      const [newTheme, newThemeColors] = action.payload;
      return {
        ...state,
        activeTheme: newTheme,
        theme: newThemeColors,
      };
    }
    case "CHANGE_DIFFICULTY": {
      return {
        ...state,
        difficulty: action.payload,
      };
    }
    case "CHANGE_TIMER": {
      return {
        ...state,
        timer: action.payload,
      };
    }
    case "CHANGE_STARTING_LIVES": {
      return;
    }
    default:
      return state;
  }
};
