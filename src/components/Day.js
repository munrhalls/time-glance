import React, { useRef, useState } from "react";
import DayCards from './DayCards';
import HourColumns from './HourColumns';
import HourMarks from './HourMarks';

function Day({ id, dayCards, updateCards }) {
  const [highlightHours, sethighlightHours] = useState([]);
  const dayRef = useRef(null);
  const getCard = (e) => {
    const cardStr = e.dataTransfer.getData("card");
    const object = JSON.parse(cardStr);
    const card = object.timeCard;
    return card;
  }
  const getHoursToHighlight = (e) => {
    const highlightHours = [];
    const startHour = Number(e.target.innerText);
    const card = getCard(e)
    const endHour = startHour + card.duration;
    for (let i = startHour; i <= endHour; i++) {
      highlightHours.push(i);
    }
    return highlightHours;
  }
  const handleUpdate = (e, card) => {
    const startHour = Number(e.target.innerText);
    const isWithinDay = startHour + card.duration <= 24;
    if (isWithinDay) {
      card.startHour = startHour;
      card.idOfScheduledDay = id;
      console.log(card)
    }
    return card;
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    const highlightHours = getHoursToHighlight(e);
    sethighlightHours(highlightHours)
  };
  const handleDragLeave = (e) => {
    // e.preventDefault();
    console.log('drag leave')
    sethighlightHours(undefined); 
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
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          highlightHours={highlightHours}
        />
        <DayCards dayCards={dayCards} />
      </div>
      <HourMarks />
    </div >
  );
}

export default Day;
