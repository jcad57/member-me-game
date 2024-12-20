import useFetchLeaderboard from "../hooks/useFetchLeaderboard";
import Button from "./Button";

function Leaderboard() {
  const { leaderboard, isLoading, error } = useFetchLeaderboard("leaderboard");

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error!</h2>;
  return (
    <div className="game-container place-items-center ">
      <div className="nes-container is-dark is-centered leaderboard-container">
        <h1 className="game-subtitle-s capitalize margin-btm-2">LEADERBOARD</h1>
        <div className="leaderboard">
          <div className="flex-space-btwn fnt-clr-yellow">
            <div>RANK</div>
            <div>NAME</div>
            <div>SCORE</div>
          </div>
          <div className="leaderboard-list">
            {leaderboard.map((item, i) => (
              <div className="flex-space-btwn" key={item.id}>
                <div>{i + 1}</div>
                <div>{item.name.length > 10 ? `${item.name.slice(0, 9)}...` : item.name}</div>
                <div>{item.score}</div>
              </div>
            ))}
          </div>
        </div>

        <Button type="is-primary" link="/">
          Menu
        </Button>
      </div>
    </div>
  );
}

export default Leaderboard;
