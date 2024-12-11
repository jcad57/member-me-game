import defaultSettings from "../data/default-settings";

// Extract default settings from the file above
const allGameModes = defaultSettings.defaultSettings;

export const gameplayVariablesInitialState = {
  score: 0,
  lives: allGameModes[0].lives,
  multiplier: 1,
  message: ["Start!"],
  gameOverMessage: "",
  randomCards: [],
  flippedCards: [],
  matchedCards: [],
  gameWin: false,
};

// Reducer for variable management during gameplay
export const gameplayVariablesReducer = (state, action) => {
  switch (action.type) {
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
          gameOverMessage: "You win!",
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
        gameOverMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
