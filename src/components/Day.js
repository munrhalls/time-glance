import React from "react";
import { useDrop } from "react-dnd";
import { TimeCard } from "./TimeCard";
import { useState } from "react";

export const Day = () => {
  
// On drop, what needs to occur:
// Pass that specific card's info up to state
// State up needs to pass props to TimeDeck
// TimeDeck needs to access that specific card
// That specific card needs to re-render conditionally
// Now with the style of a scheduled card


  const [cards] = useState([
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
  ]);

  const handleDrop = (e) => {
    console.log("Drop.");
  }
  const handleDragOver = (e) => {
    e.preventDefault();
  };


  return (
    <div
      className="h-14 border-2 flex"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e)}
    >
      {cards.map((card) => (
        <div className="border-2 w-10" key={card.id}>{card.num}</div>
      ))}
    </div>
  );
};
