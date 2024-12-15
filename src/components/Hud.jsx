function Hud({ lives, score, timer }) {
  const livesArray = Array.from({ length: lives });
  return (
    <>
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
    </>
  );
}

export default Hud;
