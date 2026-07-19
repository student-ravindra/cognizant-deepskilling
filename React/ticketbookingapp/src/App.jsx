import { useState } from "react";

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <h3>Flight Details</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>

      <h3>Book Your Ticket</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button>Book Ticket</button>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = (
      <LogoutButton
        onClick={handleLogoutClick}
      />
    );
  } else {
    button = (
      <LoginButton
        onClick={handleLoginClick}
      />
    );
  }

  return (
    <div style={{ margin: "100px" }}>
      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {button}
    </div>
  );
}

export default App;