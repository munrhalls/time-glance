import DayCard from "./DayCard";
import React, { useRef } from "react";

function Day({ updateCards, dayCards }) {
  
  const dayRef = useRef(null);
  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    const dayWidth = dayRef.current.clientWidth;
    updateCards(e, card, dayWidth);
    
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const hourUnit = 2;
  const dayHeight = hourUnit * 24;
  const dayWidth = hourUnit * 24;
  const hourMarks = [...Array(7).keys()]
    .map((i) => i * 4)
    .map((mark) => {
      return mark;
    });

  return (
    <div
      ref={dayRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`h-${dayHeight} w-${dayWidth} mt-40 border-black border-2 rounded-2x1 flex flex-col`}
    >
      <div className="h-5/6 relative">
        {dayCards.map((dayCard) => (
          <DayCard key={dayCard.id} dayCard={dayCard} />
        ))}
      </div>
      <div className="h-1/6 bg-black text-white flex">
        {hourMarks.map((mark) => (
          <span
            key={mark}
            className="text-xs font-extrabold flex-1 flex justify-center items-center"
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
