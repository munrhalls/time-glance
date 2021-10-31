import DayCard from "./DayCard";
import React, { useEffect, useRef } from "react";

function Day({ updateCards, dayCards }) {
  const dayRef = useRef(null);
  let dayRefWidth = "";
  useEffect(() => {
    if (dayRef.current) {
      // console.log(`hookRef div width: ${dayRef.current.clientWidth}`);
    }
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    if (dayRef.current == e.target) {
      const card = e.dataTransfer.getData("card");
      const dayWidth = dayRef.current.clientWidth;
      updateCards(e, card, dayWidth);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const hourUnit = 2;
  const dayHeight = "h-" + hourUnit * 24;
  const dayWidth = "w-" + hourUnit * 24;
  const tailwindCSS = `${dayWidth} ${dayHeight} relative mt-40 border-2 border-black`;

  return (
    <div
      className={tailwindCSS}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      ref={dayRef}
    >
      {dayCards.map((dayCard) => (
        <DayCard key={dayCard.id} dayCard={dayCard} />
      ))}
    </div>
  );
}

export default Day;
