import DayCard from "./DayCard";
import React, { useEffect } from "react";

function Day({ updateCards, dayCards }) {
  // 
  useEffect(() => {
    console.log(document)
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    updateCards(e, card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="mt-40 border-2 border-black w-48 h-40"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {dayCards.map((dayCard) => (
        <DayCard key={dayCard.id} dayCard={dayCard}  />
      ))}
    </div>
  );
}

export default Day;
