import GameModes from "./GameModes";
import Settings from "./Settings";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

import { useReducer } from "react";

import defaultSettings from "../data/default-settings";

const allGameModes = defaultSettings.defaultSettings;

// function reducer(state, action) {

//   switch (action.type) {
//     // CHANGE INITIAL GAME SETTINGS
//     case "CHANGE_GAME_STATUS": {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     }
//     case "CHANGE_GAME_MODE": {
//       let gameModeIndex;
//       if (action.payload === "arcade") gameModeIndex = 0;
//       if (action.payload === "casual") gameModeIndex = 1;
//       if (action.payload === "versus") gameModeIndex = 2;
//       if (action.payload === "zen") gameModeIndex = 3;
//       return {
//         ...state,
//         gameMode: allGameModes[gameModeIndex].name,
//         difficulty: allGameModes[gameModeIndex].difficulty,
//         timer: allGameModes[gameModeIndex].time,
//         lives: allGameModes[gameModeIndex].lives,
//         sound: allGameModes[gameModeIndex].sound,
//         changeableSettings: allGameModes[gameModeIndex].changeableSettings,
//         description: allGameModes[gameModeIndex].description,
//       };
//     }
//     case "CHANGE_THEME": {
//       const [newTheme, newThemeColors] = action.payload;
//       return {
//         ...state,
//         activeTheme: newTheme,
//         theme: newThemeColors,
//       };
//     }
//     case "CHANGE_DIFFICULTY": {
//       return {
//         ...state,
//         difficulty: action.payload,
//       };
//     }
//     case "CHANGE_TIMER": {
//       return {
//         ...state,
//         timer: action.payload,
//       };
//     }
//     case "CHANGE_LIVES": {
//       return;
//     }

//     // GAMEPLAY STATE

//     case "SET_SHUFFLED_CARDS": {
//       let newCards;
//       if (state.difficulty === "easy") newCards = state.theme.slice(0, 6);
//       if (state.difficulty === "normal") newCards = state.theme.slice(0, 8);
//       if (state.difficulty === "hard") newCards = state.theme;
//       const newCardPairs = [...newCards, ...newCards];
//       const newRandomizedCards = newCardPairs
//         .sort(() => Math.random() - 0.5)
//         .map((card, index) => ({ id: index, content: card, flipped: false }));
//       return {
//         ...state,
//         randomCards: newRandomizedCards,
//       };
//     }
//     case "SET_FLIPPED_CARDS": {
//       return {
//         ...state,
//         flippedCards: [...state.flippedCards, action.payload],
//       };
//     }
//     case "TOGGLE_IS_PLAYING": {
//       return {
//         ...state,
//         isPlaying: action.payload,
//         message: state.messages[0],
//       };
//     }
//     case "CHECK_FOR_MATCH": {
//       let newMatchedCards = [];
//       let newScore = state.score;
//       let newMultiplier;
//       let newLives;
//       let newMessage;

//       const [firstFlippedCard, secondFlippedCard] = state.flippedCards;
//       // Check if the two cards are a match using their index
//       if (state.randomCards[firstFlippedCard].content === state.randomCards[secondFlippedCard].content) {
//         // If so add to matched array
//         newMatchedCards = [...state.matchedCards, firstFlippedCard, secondFlippedCard];
//         // Update score / multiplier / lives / message
//         newScore = state.score + 5 * state.multiplier;
//         newMultiplier = state.multiplier < 3 ? state.multiplier + 1 : state.multiplier;
//         newLives = state.lives + 1;
//         newMessage = ["Match!", "+1 Heart", `Multiplier: ${newMultiplier}`];
//       } else {
//         // No match: subtract lives, reset multiplier, check for game-over
//         // If lives will not equal 0 on this turn, then subtract 1 from lives
//         if (state.lives > 0) newLives = state.lives - 1;
//         if (state.lives === 1) {
//           return {
//             ...state,
//             lives: 0,
//             isPlaying: false,
//             gameWin: false,
//             message: ["Game Over"],
//           };
//         }
//         newMultiplier = 1;
//         newMatchedCards = state.matchedCards;
//         newMessage = ["No match", "-1 Heart"];
//       }
//       return {
//         ...state,
//         matchedCards: newMatchedCards,
//         score: newScore ? newScore : state.score,
//         multiplier: newMultiplier,
//         lives: newLives,
//         message: newMessage,
//       };
//     }
//     case "CHECK_FOR_WIN": {
//       if (state.matchedCards.length === state.randomCards.length) {
//         return {
//           ...state,
//           isPlaying: false,
//           addNewScoreLeaderboard: true,
//           gameWin: true,
//           message: ["You win!"],
//           gameOverMessage: "You win!"
//         };
//       }
//       return state;
//     }
//     case "RESET_FLIPPED_CARDS": {
//       return {
//         ...state,
//         flippedCards: [],
//       };
//     }
//     case "UPDATE_MULTIPLE": {
//       return { ...state, ...action.payload };
//     }
//     case "END_GAME": {
//       return {
//         ...state,
//         isPlaying: false,
//         gameWin: false,
//         message: ["Game over"],
//       };
//     }
//     case "PLAY_AGAIN": {
//       return {
//         ...state,
//         isPlaying: true,
//         timer: state.timer,
//         lives: state.lives,
//         score: 0,
//         multiplier: 1,
//         message: ["Start!"],
//         gameOverMessage: "",
//         flippedCards: [],
//         matchedCards: [],
//         gameWin: false,
//       };
//     }
//     case "CHANGE_GAME_OVER_MESSAGE": {
//       return {
//         ...state,
//         gameOverMessage: action.payload
//       }
//     }
//   }
// }

// Reducer for gameplay settings

const gameSettingsReducer=(state, action) => {
  switch(action.type){
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
    case "CHANGE_LIVES": {
      return;
    }
    default: 
    return state;
  }
}

// Reducer for variable management during gameplay
const gameplayVariablesReducer = (state, action) => {
  switch(action.type){
    case "SET_SHUFFLED_CARDS": {
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
        randomCards: newRandomizedCards,
      };
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
        newLives = state.lives + 1;
        newMessage = ["Match!", "+1 Heart", `Multiplier: ${newMultiplier}`];
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
            message: ["Game Over"],
          };
        }
        newMultiplier = 1;
        newMatchedCards = state.matchedCards;
        newMessage = ["No match", "-1 Heart"];
      }
      return {
        ...state,
        matchedCards: newMatchedCards,
        score: newScore ? newScore : state.score,
        multiplier: newMultiplier,
        lives: newLives,
        message: newMessage,
      };
    }
    case "CHECK_FOR_WIN": {
      if (state.matchedCards.length === state.randomCards.length) {
        return {
          ...state,
          isPlaying: false,
          addNewScoreLeaderboard: true,
          gameWin: true,
          message: ["You win!"],
          gameOverMessage: "You win!"
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
        message: ["Game over"],
      };
    }
    case "PLAY_AGAIN": {
      return {
        ...state,
        isPlaying: true,
        timer: state.gameSettings.timer,
        lives: state.gameSettings.totalLives,
        score: 0,
        multiplier: 1,
        message: ["Start!"],
        gameOverMessage: "",
        flippedCards: [],
        matchedCards: [],
        gameWin: false,
      };
    }
    case "CHANGE_GAME_OVER_MESSAGE": {
      return {
        ...state,
        gameOverMessage: action.payload
      }
    }
    default: 
    return state;
  }
}

// Combine the reducers
const combinedReducer = (state, action) => ({
  gameSettings: gameSettingsReducer(state.gameSettings, action),
  gameplayVariables: gameplayVariablesReducer(state.gameplayVariables, action),
});

const initialState = {
  gameSettings: {
    status: "game-mode",
    gameMode: allGameModes[0].name,
    description: allGameModes[0].description,
    changeableSettings: allGameModes[0].changeableSettings,
    activeTheme: "blueTheme",
    theme: allGameModes[0].theme,
    difficulty: allGameModes[0].difficulty,
    timer: allGameModes[0].timer,
    totalLives: allGameModes[0].lives,
    sound: allGameModes[0].sound,
  }, 
  gameplayVariables: {
    score: 0,
    lives: allGameModes[0].lives,
    multiplier: 1,
    message: ["Start!"],
    gameOverMessage: "",
    randomCards: [],
    flippedCards: [],
    matchedCards: [],
    gameWin: false
}
};

function Play() {
  const [state, dispatch] = useReducer(combinedReducer, initialState);
  console.log(state);
  if (state.gameSettings.status === "game-mode") return <GameModes state={state} dispatch={dispatch} allGameModes={allGameModes} />;
  if (state.gameSettings.status === "settings") return <Settings dispatch={dispatch} state={state} />;
  if (state.gameSettings.status === "play") return <Game dispatch={dispatch} state={state} />;
  if (state.gameSettings.status === "leaderboard") return <Leaderboard />;
}

export default Play;
