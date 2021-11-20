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
    const card = getCard(e);
    const hourWidth = dayRef.current.clientWidth / 24;
    const startHour = Number(Math.floor(e.clientX / hourWidth));
    card.startHour = startHour;
    return card;
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const card = getCard(e)
    console.log(card)
    const updatedCard = handleCard(e, card);
    updateCards(e, updatedCard);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const hourColumns = [...Array(24).keys()].map((i) => i + 1);
  const hourNumMarks = [...Array(7).keys()].map((i) => i * 4);

  return (
    <div
      ref={dayRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`mt-40 border-black border-2 rounded-2x1 flex flex-col`}
      style={{height: '12rem', width: '12rem'}}
    >
      <div className="h-5/6 relative flex">
        {hourColumns.map((mark) => (
          <span
            key={mark}
            className={`w-48 relative bg-black flex items-center text-xs`}
          >
          </span>
        ))}

        {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
          />
        ))}
      </div>

      <div className="h-1/6 bg-black text-white flex">
        {hourNumMarks.map((mark) => (
          <span
            key={mark}
            className={`mr-48 flex items-center text-xs`}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
