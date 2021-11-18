import DayCard from "./DayCard";
import React, { useRef } from "react";

function Day({ updateCards, dayCards }) {
  const dayRef = useRef(null);
  const getCard = (e) => {
    const cardStr = e.dataTransfer.getData("card");
    const object = JSON.parse(cardStr);
    const card = object.timeCard;
    return card;
  }
  const handleCard = (e) => {
    // const hourWidth = dayRef.current.clientWidth / 24;
    // const startHour = Number(Math.floor(e.clientX / hourWidth));
    // card.startHour = startHour;
    const card = {
      id: 1,
      project: "Project A",
      bgColor: "blue",
      startHour: 7,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined
    }
    return card;
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const card = getCard(e)
    const updatedCard = handleCard(e, card);
    updateCards(e, updatedCard);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const hourUnit = 2;
  const dayHeight = hourUnit * 24;
  const dayWidth = hourUnit * 24;
  const hourColumns = [...Array(24).keys()].map((i) => i + 1);
  const hourNumMarks = [...Array(7).keys()].map((i) => i * 4);

  return (
    <div
      ref={dayRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`h-${dayHeight} w-${dayWidth} mt-40 border-black border-2 rounded-2x1 flex flex-col`}
    >
      <div className="h-5/6 relative flex">
        {hourColumns.map((mark) => (
          <span
            key={mark}
            className={`w-${hourUnit} relative border border-gray-100 flex items-center text-xs`}
          >
            {mark}
          </span>
        ))}

        {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
            hourUnit={hourUnit}
          />
        ))}
      </div>

      <div className="h-1/6 bg-black text-white flex">
        {hourNumMarks.map((mark) => (
          <span
            key={mark}
            className={`mr-${hourUnit * 2} flex items-center text-xs`}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
