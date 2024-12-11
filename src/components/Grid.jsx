import { useEffect } from "react";
import Card from "./Card";

function Grid({ dispatch, state }) {
  const { randomCards, flippedCards, matchedCards, isPlaying } = state;

  // useEffect(() => {
  //   // Shuffle the cards on mount
  //   function shuffleCards() {
  //     let newCards;
  //     if (state.difficulty === "easy") newCards = state.theme.slice(0, 6);
  //     if (state.difficulty === "normal") newCards = state.theme.slice(0, 8);
  //     if (state.difficulty === "hard") newCards = state.theme;
  //     const newCardPairs = [...newCards, ...newCards];
  //     const newRandomizedCards = newCardPairs
  //       .sort(() => Math.random() - 0.5)
  //       .map((card, index) => ({ id: index, content: card, flipped: false }));
  //     dispatch({ type: "SET_SHUFFLED_CARDS", payload: newRandomizedCards });
  //   }
  //   if (isPlaying) shuffleCards();
  // }, [state.difficulty, dispatch, state.theme, isPlaying]);

  function handleCardClick(card) {
    if (state.isPlaying && !flippedCards.includes(card.id)) {
      if (flippedCards.length < 2) dispatch({ type: "SET_FLIPPED_CARDS", payload: card.id });

      if (flippedCards.length === 1) {
        dispatch({ type: "CHECK_FOR_MATCH" });
        setTimeout(() => {
          dispatch({ type: "RESET_FLIPPED_CARDS" });
        }, 1000);
        dispatch({ type: "CHECK_FOR_WIN" });
      }
    }
  }

  return (
    <div className="game-grid">
      {randomCards.length > 0 ? (
        randomCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            flipped={flippedCards.includes(card.id)}
            matched={matchedCards.includes(card.id)}
            onClick={() => handleCardClick(card)}
          />
        ))
      ) : (
        <span>Error</span>
      )}
    </div>
  );
}

export default Grid;
