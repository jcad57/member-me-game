import GameModes from "./GameModes";
import Settings from "./Settings";
import Game from "./Game";

import { useReducer } from "react";

import defaultSettings from "../data/default-settings";

const allGameModes = defaultSettings.defaultSettings;

function reducer(state, action) {
  switch (action.type) {
    // INITIAL GAME SETTINGS
    case "CHANGE_GAME_STATUS": {
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

    // GAMEPLAY

    case "SET_SHUFFLED_CARDS": {
      return {
        ...state,
        randomCards: action.payload,
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
          message: ["You win!"],
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
        message: ["Game over"],
      };
    }
  }
}

const initialState = {
  status: "game-mode",
  gameMode: allGameModes[0].name,
  activeTheme: "blueTheme",
  theme: allGameModes[0].theme,
  difficulty: allGameModes[0].difficulty,
  timer: allGameModes[0].timer,
  lives: allGameModes[0].lives,
  sound: allGameModes[0].sound,
  score: 0,
  multiplier: 1,
  message: ["Start!"],
  randomCards: [],
  flippedCards: [],
  matchedCards: [],
};

function Play() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.status === "game-mode") return <GameModes state={state} dispatch={dispatch} allGameModes={allGameModes} />;
  if (state.status === "settings") return <Settings dispatch={dispatch} state={state} />;
  if (state.status === "play") return <Game dispatch={dispatch} state={state} />;
}

export default Play;
