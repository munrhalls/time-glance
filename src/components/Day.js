import DayCard from "./DayCard";
import React, { useEffect } from "react";

function Day({ updateCards, dayCards }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    updateCards(e, card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const hourUnit = 2;
  const dayHeight = 'h-' + hourUnit * 24;
  const dayWidth = 'w-' + hourUnit * 24;
  const tailwindCSS = `${dayWidth} ${dayHeight} relative mt-40 border-2 border-black`;

  return (
    <div
      className={tailwindCSS}
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
