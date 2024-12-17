import Button from "./Button";

function MainMenu() {
  return (
    <div className="game-container place-items-center">
      <div className="content-container gap-4">
        <h1 className="game-title heading">'member Me?</h1>
        <div className="game-description-container nes-container is-dark is-centered is-rounded">
          <p className="fnt-clr-white">
            A take on the classic memory game <strong>Concentration</strong> but with an arcade feel!
          </p>
        </div>
        <Button type="is-primary" link="play">
          Play
        </Button>

      </div>
    </div>
  );
}

export default MainMenu;
