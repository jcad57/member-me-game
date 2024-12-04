import Button from "./Button";

function MainMenu() {
  return (
    <div className="game-container place-items-center">
      <div className="content-container">
        <h1 className="game-title heading">'member Me?</h1>
        <div className="btn-container">
          <Button type="is-primary" link="play">
            Play
          </Button>
          <Button type="is-warning" link="leaderboard">
            Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
