import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Multiple methods
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const euroAmount = amount * 80;

    alert(
      `Converting to Euro Amount is ${euroAmount}`
    );
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br />
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />
      <br />

      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>

      <br />
      <br />

      <button onClick={onPress}>
        Click on me
      </button>

      <br />
      <br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>
        <label>Amount:</label>

        <input
          type="text"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <br />
        <br />

        <label>Currency:</label>

        <input
          type="text"
          value={currency}
          onChange={(e) =>
            setCurrency(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;