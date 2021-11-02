import DayCard from "./DayCard";
import React, { useRef } from "react";

function Day({ updateCards, dayCards }) {
  const dayRef = useRef(null);
  const handleDrop = (e) => {
    e.preventDefault();
    const card = JSON.parse(e.dataTransfer.getData("card")).timeCard;
    const hourWidth = dayRef.current.clientWidth / 24;
    card.numStartHour = Number(Math.floor(e.clientX / hourWidth));
    updateCards(e, card);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const numHourUnit = 2;

  return (
    <div
      ref={dayRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`h-${numHourUnit * 24} w-${
        numHourUnit * 24
      } mt-40 border-black border-2 rounded-2x1 flex flex-col`}
    >
      <div className="h-5/6 relative">
        {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
            numHourUnit={numHourUnit}
          />
        ))}
      </div>
      <div className="h-1/6 bg-black text-white flex">
        {[...Array(7).keys()]
          .map((i) => i * 4)
          .map((mark) => (
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
