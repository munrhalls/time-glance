import "./App.css";
import { TimeDeck } from "./components/TimeDeck";
import { Day } from "./components/Day";

function App() {
  return (
    <div className="App container h-screen box-border">
      <TimeDeck />
      <Day />
      
    </div>
  );
}

export default App