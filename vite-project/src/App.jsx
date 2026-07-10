import User from "./assets/components/User";
import Button from "./assets/components/Button";
import "./App.css";

function App() {
  let name = "Darshana";
  let surname = "Bhandari";

  return (
    <div className="app">
      <h1>My First React App</h1>
      <User name={name} surname={surname} />
      <Button />
    </div>
  );
}

export default App;