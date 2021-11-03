import DayCard from "./DayCard";
import React, { useRef } from "react";

function Day({ updateCards, dayCards }) {
  const dayRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const cardStr = e.dataTransfer.getData("card").timeCard
    const card = JSON.parse(cardStr);
    const hourWidth = dayRef.current.clientWidth / 24;
    const numStartHour = Number(Math.floor(e.clientX / hourWidth));
    card.numStartHour = numStartHour;
    updateCards(e, card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const numHourUnit = 2;
  const hourColumns = [...Array(24).keys()].map((i) => i + 1);
  const hourNumMarks = [...Array(7).keys()].map((i) => i * 4);

  return (
    <div
      ref={dayRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`h-${numHourUnit * 24} w-${
        numHourUnit * 24
      } mt-40 border-black border-2 rounded-2x1 flex flex-col`}
    >
      <div className="h-5/6 flex">
        {hourColumns.map((mark) => (
          <span
            key={mark}
            className={`w-${numHourUnit} border border-gray-100 flex items-center text-xs`}
          >
            {mark}
          </span>
        ))}

        {/* {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
            numHourUnit={numHourUnit}
          />
        ))} */}
      </div>

      <div className="h-1/6 bg-black text-white flex">
        {hourNumMarks.map((mark) => (
          <span
            key={mark}
            className={`mr-${numHourUnit * 2} flex items-center text-xs`}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
