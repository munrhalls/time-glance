import "./App.css";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import TimeCard from "./components/TimeCard";

function App() {
  const [timeCards, setCards] = useState([
    { id: 1, duration: 8 },
    { id: 2, duration: 8 },
    { id: 3, duration: 8 },
  ]);
  const testCard = timeCards[0];
  const dayCards = timeCards;

  const updateCards = (e, card) => {
    e.preventDefault();
    setCards(() => [{ id: 1, duration: 3 },
      { id: 2, duration: 8 },
      { id: 3, duration: 8 },
      { id: 4, duration: 8 }]);
  };

  return (
    <div className="App container h-screen box-border">
      <TimeCard card={testCard} />
      <Day updateCards={updateCards} dayCards={dayCards} />
    </div>
  );
}

export default App;
