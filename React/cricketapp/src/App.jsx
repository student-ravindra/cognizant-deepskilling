import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";


function App() {


  // Change this value to true or false to check output
  const flag = true;
  //const flag = false;


  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "MS Dhoni",
    "Sachin Tendulkar",
    "Rahul Dravid",
    "Sourav Ganguly",
    "Yuvraj Singh",
    "Hardik Pandya",
    "Jasprit Bumrah",
    "Ravindra Jadeja",
    "Shikhar Dhawan"
  ];


  return (
    <div>

      <h1>Indian Cricket Team</h1>


      {
        flag 
        ?
        <ListofPlayers />
        :
        <IndianPlayers players={players} />
      }


    </div>
  );
}

export default App;