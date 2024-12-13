import useFetchLeaderboard from "../hooks/useFetchLeaderboard";

function Leaderboard() {
  const leaderboard = useFetchLeaderboard("leaderboard");

  return (
    <div className="game-container place-items-center ">
      <div className="nes-container is-centered">
        <h1 className="game-subtitle heading capitalize">LEADERBOARD</h1>
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
                <div>{item.name}</div>
                <div>{item.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
