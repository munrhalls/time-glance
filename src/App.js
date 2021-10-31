import "./App.css";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import TimeCard from "./components/TimeCard";

function App() {
  const [timeCards, setCards] = useState([
    { id: 1, duration: 3}
  ]);
  const testCard = timeCards[0];

  const updateCards = (e, card) => {
    e.preventDefault();
    // console.log(card)
    setCards(() => [{id: 1, duration: 12 }])
  };
  
  return (
    <div className="App container h-screen box-border">
      <TimeCard card={testCard} />
      <Day updateCards={updateCards} dayScheduledCards={timeCards} />
    </div>
  );
}

export default App;