import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import TimeCard from "./components/TimeCard";


function App() {
 
  return (
    <div className="App container h-screen box-border">
      <main className="flex">
        <TimeCard id="card-1" draggable="true" text="Card one" />

        <Day id="Day-2" className="m-7 w-40 bg-gray-500 h-96">
          <TimeCard id="card-2" draggable="true" text="Card two" />
        </Day>
      </main>
    </div>
  );
}

export default App;
