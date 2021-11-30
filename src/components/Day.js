import React, { useRef, useState } from "react";
import DayCards from './DayCards';
import HourColumns from './HourColumns';
import HourMarks from './HourMarks';
import HighlightBox from './HighlightBox';

function Day({ id, dayCards, updateCards }) {
  const [highlightParams, setHighlightParams] = useState({display: 'none', width: 0, left: 0, bgColor: 'purple', });
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
      console.log(card)
    }
    return card;
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    const card = getCard(e)
    // REWRITE
    // detect in hourColumn but handle in day
    // 1. hourColumn's innerText ->  get hour num
    // 2. standardize hour unit
    // 3. multiply that by hour num
    // 4. from that, get width: card.duration * hour num
    // 5. create highlightBox component
    // 6. props width = card.duration * standard unit, marginLeft = hourNum * standard unit, color = card.color, pos absolute, height full
    // DONE
    // 1. DONE
    // 2. DONE
    // 3. DONE
    // 4. DONE
    // 5. DONE
    // 6 DONE

    const bgColor = card.bgColor;
    const hourColumn = e.target;
    const hourNum = hourColumn.innerText;
    const width = standardHourColWidth * card.duration; 
    const distanceLeft = standardHourColWidth * hourNum;
    setHighlightParams({display: 'block', bgColor: bgColor, width: width, left: distanceLeft})
    
    
  };
  const handleDragLeave = (e) => {
    // e.preventDefault();
    const highLightParams = {display: false, width: 0, left: 0, bgColor: 'none', }
    setHighlightParams(highLightParams); 
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const card = getCard(e)
    const updatedCard = handleUpdate(e, card);
    const highLightParams = {display: false, width: 0, left: 0, bgColor: 'none', }
    setHighlightParams(highLightParams); 
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
          standardHourColWidth={standardHourColWidth}
        />
        <DayCards dayCards={dayCards} />
      </div>
      <HourMarks />
      <HighlightBox highlightParams={highlightParams} />
    </div >
  );
}

export default Day;
