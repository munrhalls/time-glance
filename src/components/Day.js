import DayCard from "./DayCard";
import React, { useRef } from "react";

function Day({ updateCards, dayCards }) {
  const dayRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (dayRef.current === e.target) {
      const card = e.dataTransfer.getData("card");
      updateCards(e, card, dayRef.current.clientWidth);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const hourUnit = 2;
  const dayHeight = "h-" + hourUnit * 24;
  const dayWidth = "w-" + hourUnit * 24;

  return (
    <div
      className={`${dayWidth} ${dayHeight} relative mt-40 border-black border-2 rounded-2x1 flex flex-col`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      ref={dayRef}
    >
      <div>
        {dayCards.map((dayCard) => (
          <DayCard key={dayCard.id} dayCard={dayCard} />
        ))}
      </div>
      <div>
        {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => {
          return <span>{hour}</span>;
        })}
      </div>
    </div>
  );
}

export default Day;
