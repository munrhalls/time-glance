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
  
  const hourMarks = [...Array(7).keys()].map((i) => i * 4).map((mark) => {return mark});
  

  return (
    <div
      className={`${dayWidth} ${dayHeight} relative mt-40 border-black border-2 rounded-2x1 flex flex-col`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      ref={dayRef}
    >
      <div className="h-5/6">
        {dayCards.map((dayCard) => (
          <DayCard key={dayCard.id} dayCard={dayCard} />
        ))}
      </div>
      <div className="h-1/6 bg-black text-white flex content-between">
        {hourMarks.map((mark) => {
          return (<span key={mark} className="flex-1 flex items-center"> {mark} </span>)
        })}
      </div>
    </div>
  );
}

export default Day;
