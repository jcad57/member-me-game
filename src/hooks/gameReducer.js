import defaultSettings from "../data/default-settings";
import useWriteToLeaderboard from "../hooks/useWriteToLeaderboard";
import useFetchLeaderboard from "./useFetchLeaderboard";

// Set the default settings and game mode to "Arcade" which is located at index [0] inside defaultSettings.js
const gameplayDefaultSettings = defaultSettings.defaultSettings[0];

// Selects the entire object which contains every game mode and their initial settings
const allGameModes = defaultSettings.defaultSettings;

export const initialState = {
  // STATE THAT MANAGES GAME SETTINGS:
  // Set the default settings to the first game mode ( gameplayDefaultSettings ) in 'default-settings.js' which is Arcade mode.
  gameMode: gameplayDefaultSettings.name,
  description: gameplayDefaultSettings.description,
  extraInfo: gameplayDefaultSettings.extraInfo,
  changeableSettings: gameplayDefaultSettings.changeableSettings,
  //TODO: make activeTheme dynamic
  activeTheme: "blueTheme",
  theme: gameplayDefaultSettings.theme,
  difficulty: gameplayDefaultSettings.difficulty,
  timer: gameplayDefaultSettings.timer,
  totalLives: gameplayDefaultSettings.lives,
  sound: gameplayDefaultSettings.sound,

  // STATE THAT MANAGES GAMEPLAY:
  isPlaying: false,
  score: 0,
  timeLeft: gameplayDefaultSettings.timer,
  currentLives: gameplayDefaultSettings.lives,
  multiplier: 1,
  message: { eventCount: 1, text: ["Start!"] },
  gameOverMessage: "",
  randomCards: [],
  flippedCards: [],
  matchedCards: [],
  gameWin: false,
  newHighScore: false,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    // GAMEPLAY SETTINGS ACTIONS:
    case "CHANGE_GAME_MODE": {
      let gameModeIndex;
      if (action.payload === "arcade") gameModeIndex = 0;
      if (action.payload === "casual") gameModeIndex = 1;
      if (action.payload === "versus") gameModeIndex = 2;
      if (action.payload === "zen") gameModeIndex = 3;
      return {
        ...state,
        // activeTheme: allGameModes[gameModeIndex].theme,
        gameMode: allGameModes[gameModeIndex].name,
        description: allGameModes[gameModeIndex].description,
        extraInfo: allGameModes[gameModeIndex].extraInfo,
        difficulty: allGameModes[gameModeIndex].difficulty,
        timer: allGameModes[gameModeIndex].timer,
        lives: allGameModes[gameModeIndex].lives,
        sound: allGameModes[gameModeIndex].sound,
        changeableSettings: allGameModes[gameModeIndex].changeableSettings,
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
    case "CHANGE_SOUND": {
      return {
        ...state,
        sound: action.payload,
      };
    }
    case "CHANGE_STARTING_LIVES": {
      return;
    }

    // GAMEPLAY ACTIONS:
    case "START_NEW_GAME": {
      let newCards;
      if (state.difficulty === "easy") newCards = state.theme.slice(0, 6);
      if (state.difficulty === "normal") newCards = state.theme.slice(0, 8);
      if (state.difficulty === "hard") newCards = state.theme;
      const newCardPairs = [...newCards, ...newCards];
      const newRandomizedCards = newCardPairs
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ id: index, content: card, flipped: false }));
      return {
        ...state,
        isPlaying: true,
        gameWin: false,
        newHighScore: false,
        lives: state.totalLives,
        score: 0,
        multiplier: 1,
        message: { eventCount: 1, text: ["Start!"] },
        gameOverMessage: "",
        flippedCards: [],
        matchedCards: [],
        randomCards: newRandomizedCards,
        timeLeft: state.timer ? 120 : null,
      };
    }
    case "DECREMENT_TIME_LEFT": {
      if (state.timeLeft !== 1)
        return {
          ...state,
          timeLeft: state.timeLeft - 1,
        };

      if (state.timeLeft === 1)
        return {
          ...state,
          timeLeft: 0,
          isPlaying: false,
          gameWin: false,
          message: { eventCount: state.message.eventCount + 1, text: ["Game Over"] },
          gameOverMessage: "You ran out of time",
        };

      return state;
    }
    case "SET_FLIPPED_CARDS": {
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload],
      };
    }
    case "TOGGLE_IS_PLAYING": {
      return {
        ...state,
        isPlaying: action.payload,
        message: state.messages[0],
      };
    }
    case "CHECK_FOR_MATCH": {
      let newMatchedCards = [];
      let newScore = state.score;
      let newMultiplier;
      let newLives;
      let newMessage;

      const [firstFlippedCard, secondFlippedCard] = state.flippedCards;
      // Check if the two cards are a match using their index
      if (state.randomCards[firstFlippedCard].content === state.randomCards[secondFlippedCard].content) {
        // If so add to matched array
        newMatchedCards = [...state.matchedCards, firstFlippedCard, secondFlippedCard];
        // Update score / multiplier / lives / message
        newScore = state.score + 5 * state.multiplier;
        newMultiplier = state.multiplier < 3 ? state.multiplier + 1 : state.multiplier;
        newLives = state.lives === 8 ? state.lives : state.lives + 1;
        newMessage = [newLives === 8 ? "Max hearts!" : "+1 Heart", `Multiplier: ${newMultiplier}`];
      } else {
        // No match: subtract lives, reset multiplier, check for game-over
        // If lives will not equal 0 on this turn, then subtract 1 from lives
        if (state.lives > 0) newLives = state.lives - 1;
        if (state.lives === 1) {
          return {
            ...state,
            lives: 0,
            isPlaying: false,
            gameWin: false,
            message: { eventCount: state.message.eventCount + 1, text: ["Game Over"] },
            gameOverMessage: "You ran out of lives",
          };
        }
        newMultiplier = 1;
        newMatchedCards = state.matchedCards;
        newMessage = ["-1 Heart"];
      }
      return {
        ...state,
        matchedCards: newMatchedCards,
        score: newScore ? newScore : state.score,
        multiplier: newMultiplier,
        lives: newLives,
        message: { eventCount: state.message.eventCount + 1, text: [...newMessage] },
      };
    }
    case "CHECK_FOR_WIN": {
      if (state.matchedCards.length === state.randomCards.length) {
        return {
          ...state,
          newHighScore: true,
          isPlaying: false,
          addNewScoreLeaderboard: true,
          gameWin: true,
          message: { eventCount: state.message.eventCount + 1, text: ["WOOHOO"] },
          gameOverMessage: "YOU WIN!",
        };
      }
      return state;
    }
    case "RESET_FLIPPED_CARDS": {
      return {
        ...state,
        flippedCards: [],
      };
    }
    case "UPDATE_MULTIPLE": {
      return { ...state, ...action.payload };
    }
    case "END_GAME": {
      return {
        ...state,
        isPlaying: false,
        gameWin: false,
        message: { eventCount: state.message.eventCount + 1, text: ["Game Over"] },
        gameOverMessage: "You ended the game",
      };
    }
    case "CHANGE_GAME_OVER_MESSAGE": {
      return {
        ...state,
        gameOverMessage: action.payload,
      };
    }
    case "SUBMIT_NEW_HIGHSCORE": {
      useWriteToLeaderboard(action.payload, state.score);
    }
    default:
      return state;
  }
};
