function ListofPlayers() {

  // Array of 11 players using ES6
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "MS Dhoni", score: 78 },
    { name: "Sachin Tendulkar", score: 65 },
    { name: "Rahul Dravid", score: 60 },
    { name: "Sourav Ganguly", score: 72 },
    { name: "Yuvraj Singh", score: 68 },
    { name: "Hardik Pandya", score: 80 },
    { name: "Jasprit Bumrah", score: 55 },
    { name: "Ravindra Jadeja", score: 74 },
    { name: "Shikhar Dhawan", score: 66 }
  ];


  // ES6 map() method
  const playerList = players.map(player => (
    <li key={player.name}>
      {player.name} - Score: {player.score}
    </li>
  ));


  // ES6 arrow function with filter()
  const lowScorePlayers = players.filter(
    player => player.score < 70
  );


  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {playerList}
      </ul>


      <h3>Players with Score Below 70</h3>
      <ul>
        {
          lowScorePlayers.map(player => (
            <li key={player.name}>
              {player.name} - Score: {player.score}
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default ListofPlayers;