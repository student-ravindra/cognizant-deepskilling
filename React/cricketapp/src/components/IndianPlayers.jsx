function IndianPlayers(props) {

  // ES6 Destructuring
  const { players } = props;


  // Declare two teams
  const T20players = players.slice(0, 6);

  const RanjiTrophyPlayers = players.slice(6);


  // ES6 Spread operator - Merge two arrays
  const mergedPlayers = [
    ...T20players,
    ...RanjiTrophyPlayers
  ];


  // Even team players
  const evenPlayers = mergedPlayers.filter(
    (player, index) => index % 2 === 0
  );


  // Odd team players
  const oddPlayers = mergedPlayers.filter(
    (player, index) => index % 2 !== 0
  );


  return (
    <div>

      <h2>Indian Players</h2>


      <h3>Even Team Players</h3>
      <ul>
        {
          evenPlayers.map(player => (
            <li key={player}>
              {player}
            </li>
          ))
        }
      </ul>



      <h3>Odd Team Players</h3>
      <ul>
        {
          oddPlayers.map(player => (
            <li key={player}>
              {player}
            </li>
          ))
        }
      </ul>



      <h3>Merged T20 and Ranji Trophy Players</h3>
      <ul>
        {
          mergedPlayers.map(player => (
            <li key={player}>
              {player}
            </li>
          ))
        }
      </ul>


    </div>
  );
}

export default IndianPlayers;