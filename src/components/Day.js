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
    // isWithinDay
    // isWithinAvailableHours
    const hourWidth = dayRef.current.clientWidth / 24;
    const startHour = Number(Math.floor(e.clientX / hourWidth));
    const isWithinDay = startHour + card.duration <= 24;
    if (isWithinDay) {
      card.startHour = startHour;
    }
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
  const everyFourHours = [...Array(6).keys()].map((i) => (i + 1) * 4);

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
            className={`bg-black flex items-center text-xs`}
            style={{width: '0.5rem'}}
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

      <div className="h-1/6 flex bg-black text-white items-center relative">
        {everyFourHours.map((mark, i) => (
          <span
            key={i}
            className={`absolute flex items-center text-xs`}
            style={{marginLeft: `${mark/2}rem`}}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
