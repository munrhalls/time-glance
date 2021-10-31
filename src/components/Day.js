import React from "react";
import DayCard from "./DayCard";

function Day({ updateCards, dayCards }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    updateCards(e, card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  console.log(dayCards)
  return (
    <div
      className="mt-40 border-2 border-black w-40 h-40"
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
    {dayCards.map((dayCard) =>
      <DayCard key={dayCard.id} dayCard={dayCard} />
    )}
    </div>
  )
}

export default Day;
