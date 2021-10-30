import "./App.css";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import TimeCard from "./components/TimeCard";

function App() {
  const [timeCards, setCards] = useState([
    { card: 1 }
  ]);
  
  const updateCards = (e, card) => {
    e.preventDefault();
    // console.log(card)
    setCards(() => [{card: "CHANGED ID  FROM SET STATE (CARDS) HOOK" }])
  };
  
  console.log(timeCards[0].card)
  return (
    <div className="App container h-screen box-border">
      <TimeCard card={1} />
      <Day updateCards={updateCards} />
    </div>
  );
}

export default App;
