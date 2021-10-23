import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TimeDeck } from "./components/TimeDeck";
import { TimeCard } from "./components/TimeCard";

import { Day } from "./components/Day";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App container h-screen box-border">
        <TimeCard />
        <Day />
      </div>
    </DndProvider>
  );
}

export default App;
