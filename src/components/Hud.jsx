import Bonuses from "./Bonuses";

function Hud({ lives, score, timer, state }) {
  const livesArray = Array.from({ length: lives });
  return (
    <div>
      <div className="hud-container">
        <div className="hud-item">
          <div>LIVES</div>
          <div className="lives-container">
            {livesArray.map((life, i) => (
              <i key={i} className="nes-icon is-small heart"></i>
            ))}
          </div>
        </div>
        <div className="hud-item">
          <div>SCORE</div> <div>{score}</div>
        </div>
        <div className="hud-item">
          <div>TIME</div> <div>{timer !== null ? timer : "---"}</div>
        </div>
      </div>
      <Bonuses state={state} />
    </div>
  );
}

export default Hud;
