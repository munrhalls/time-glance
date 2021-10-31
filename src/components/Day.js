import DayCard from "./DayCard";
import React, { useEffect } from "react";

function Day({ updateCards, dayCards }) {
  // 
  useEffect(() => {
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    updateCards(e, card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const hourUnit = 2;
  const dayWidth = 'w-' + hourUnit * 24;
  const tailwindCSS = `mt-40 border-2 border-black ${dayWidth} h-40`;

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
