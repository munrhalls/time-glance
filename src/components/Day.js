import React, { useRef, useState } from "react";
import DayCards from './DayCards';
import HourColumns from './HourColumns';
import HourMarks from './HourMarks';

function Day({ id, dayCards, updateCards }) {
  const dayRef = useRef(null);
  const standardHourColWidth = 0.5;

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
      card.idOfScheduledDay = id;
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
      className={`mt-4 border-black border-2 rounded-2x1 flex flex-col relative`}
      style={{ height: '12rem', width: '12rem', marginLeft: '0.5rem'}}
    >
      <div className="h-5/6 flex relative">
        <HourColumns
          handleDrop={handleDrop}
          getCard={getCard}
          standardHourColWidth={standardHourColWidth}
        />
        <DayCards dayCards={dayCards} />
      </div>
      <HourMarks />
    </div >
  );
}

export default Day;
