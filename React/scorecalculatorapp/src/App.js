import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Ravi"
        school="ABC High School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;