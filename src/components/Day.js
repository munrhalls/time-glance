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

  const handleUpdate = (e, card) => {
    // isWithinDay
    // isWithinAvailableHours
    const startHour = Number(e.target.innerText);
    console.log(startHour)
    const isWithinDay = startHour + card.duration <= 24;
    if (isWithinDay) {
      card.startHour = startHour;
    }
    return card;
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const card = getCard(e)
    const updatedCard = handleUpdate(e, card);
    updateCards(e, updatedCard);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const hourColumns = [...Array(24).keys()].map((i) => i);
  console.log(hourColumns);
  const everyFourHours = [...Array(6).keys()].map((i) => (i + 1) * 4);

  return (
    <div
      ref={dayRef}
      onDragOver={handleDragOver}
      className={`mt-40 border-black border-2 rounded-2x1 flex flex-col relative`}
      style={{ height: '12rem', width: '12rem', marginLeft: '30rem' }}
    >
      <div className="h-5/6 relative flex">
        {hourColumns.map((mark) => (
          <span
            onDrop={handleDrop}
            key={mark}
            className={`bg-black flex items-center text-xs`}
            style={{ width: '0.5rem' }}

          >
            {mark}
          </span>
        ))}

        {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
          />
        ))}
      </div>

      <div className="h-1/6 flex bg-black text-white items-center relative">
        {everyFourHours.map((mark, i) => (
          <span
            key={i}
            className={`absolute flex items-center text-xs`}
            style={{ marginLeft: `${mark / 2}rem` }}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
