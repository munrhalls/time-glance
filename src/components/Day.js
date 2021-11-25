import DayCard from "./DayCard";
import React, { useRef, useState } from "react";

import HourColumns from './HourColumns';
import HourColumn from './HourColumn';

function Day({ updateCards, dayCards }) {
  const [dragHighlight, setDragHighlight] = useState([]);
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
  const handleDragOver = (e) => {
    e.preventDefault();
    const highlightHours = getHoursToHighlight(e);
    setDragHighlight(highlightHours)
  };
  const getHoursToHighlight = (e) => {
    const highlightHours = [];
    const startHour = Number(e.target.innerText);
    const card = getCard(e)
    const endHour = startHour + card.duration;
    for (let i = startHour; i <= endHour; i++) {
      highlightHours.push(i);
    }
    console.log(highlightHours)
    return highlightHours;
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
      <HourColumns
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        dragHighlight={dragHighlight}
      />

      {dayCards.map((dayCard) => (
        <DayCard
          key={dayCard.id}
          dayCard={dayCard}
        />
      ))}
      <div className="h-1/6 flex bg-black text-white items-center"
      >
        {hourMarks.map((mark, i) => (
          <span
            className={`text-xs h-full flex justify-center items-center`}
            style={{ width: '2rem', borderRight: '4px solid #111111', marginLeft: '0.15rem', fontWeight: 'bold' }}
            key={i}
          >
            {mark}
          </span>
        ))}
      </div>
    </div >
  );
}

export default Day;
