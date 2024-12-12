import Card from "./Card";

function Grid({ dispatch, state }) {
  const { randomCards, flippedCards, matchedCards, isPlaying } = state;

  function handleCardClick(card) {
    if (state.isPlaying && !state.flippedCards.includes(card.id)) {
      if (state.flippedCards.length < 2) dispatch({ type: "SET_FLIPPED_CARDS", payload: card.id });

      if (state.flippedCards.length === 1) {
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
