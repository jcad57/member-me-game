import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

function HowToPlay() {
  const [canClick, setCanClick] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const cardColors = ["fff", "000", "000", "fff"];

  function checkForWin() {
    if (matchedCards.length === 2) {
      setCanClick(false);
      console.log("win");
    }
  }

  function handleFlipCard(card, cardIndex) {
    //
    if (!canClick || flippedCards.includes(cardIndex) || matchedCards.includes(card)) return;

    if (flippedCards.length === 0) setFlippedCards((prevCards) => [...prevCards, cardIndex]);

    if (flippedCards.length === 1) {
      if (cardColors[flippedCards[0]] === cardColors[cardIndex]) {
        setMatchedCards((prevCards) => [...prevCards, card]);
        checkForWin();
      }
    }
  }
  return (
    <div className="game-container place-items-center">
      <div className="content-container">
        <h1 className="game-subtitle heading capitalize">How To Play</h1>
        <div className="nes-container is-dark">
          <p>It&apos;s simple!</p>
          <p> Flip 2 cards and try to match the colors</p>
          {/* <div className="how-to-grid">
            {cardColors.map((card, i) => (
              <Card
                flipped={flippedCards.includes(i) || matchedCards.includes(card)}
                content={card}
                key={i}
                onClick={() => handleFlipCard(card, i)}
              />
            ))}
          </div> */}
          <p>You can only flip two at a time so try and remember where they are!</p>
          <p>Match all the colors to win!</p>
        </div>
        <Button type="is-primary" link="/">
          Back
        </Button>
      </div>
    </div>
  );
}

export default HowToPlay;
