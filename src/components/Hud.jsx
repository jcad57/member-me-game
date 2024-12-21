function Hud({ lives, score, timer, multiplier }) {
  const livesArray = Array.from({ length: lives });
  return (
    <>
      <div className="width-100">
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
        {multiplier > 1 && <span className="fnt-clr-yellow">multiplier: x{multiplier}</span>}
      </div>
    </>
  );
}

export default Hud;
