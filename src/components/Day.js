import DayCard from "./DayCard";
import React, { useRef } from "react";
import HourColumn from './HourColumn';

function Day({ updateCards, dayCards }) {
  const hourColumns = [...Array(24).keys()].map((i) => i);
  const hourMarks = [...Array(6).keys()].map((i) => (i) * 4);
  const dayRef = useRef(null);
  const getCard = (e) => {
    const cardStr = e.dataTransfer.getData("card");
    const object = JSON.parse(cardStr);
    const card = object.timeCard;
    return card;
  }
  const handleUpdate = (e, card) => {
    const startHour = Number(e.target.innerText);
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

  return (
    <div
      ref={dayRef}
      className={`mt-40 border-black border-2 rounded-2x1 flex flex-col relative`}
      style={{ height: '12rem', width: '12rem', marginLeft: '30rem' }}
    >
      <div className="h-5/6 relative flex">
        {hourColumns.map((mark) => (
          <HourColumn
            handleDrop={handleDrop}
            getCard={getCard}
            key={mark}
            className={`bg-black color-white text-xs flex items-end`}
            mark={mark}
            isHighlighted={false}
          />
        ))}

        {dayCards.map((dayCard) => (
          <DayCard
            key={dayCard.id}
            dayCard={dayCard}
          />
        ))}
      </div>

      <div className="h-1/6 flex bg-black text-white items-center"
      >
        {hourMarks.map((mark, i) => (
          <span
            key={i}
            className={`text-xs h-full flex justify-center items-center`}
            style={{ width: '2rem', borderRight: '4px solid #111111', marginLeft: '0.15rem', fontWeight: 'bold' }}
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Day;
