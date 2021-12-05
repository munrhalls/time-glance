import React, { useState, useEffect } from "react";
import HourColumn from './HourColumn';
let currentDragOverHour;

const HourColumns = ({ getCard, handleDragEnd, handleDrop, highlightHours, standardHourColWidth }) => {
    const hourColumns = [...Array(24).keys()].map((i) => i);
    const [highlightedHours, setHighlightedHours] = useState([])
    const handleDragOver = (e) => {
        e.preventDefault();
        if (e.target.innerText !== currentDragOverHour) {
            const hoursToHighlight = [];
            const card = getCard(e);
            currentDragOverHour = Number(e.target.innerText);
            for (let i = currentDragOverHour; i <= card.duration; i++) {
                hoursToHighlight.push(i);
            }
            setHighlightedHours(hoursToHighlight);
        }
    }
    return (
        <>
            {hourColumns.map((mark) => (
                (<HourColumn
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    handleDragEnd={handleDragEnd}
                    isHighlighted={highlightedHours.indexOf(mark) > -1}
                    getCard={getCard}
                    mark={mark}
                    className={`bg-black color-white text-xs flex items-end`}
                    standardHourColWidth={standardHourColWidth}
                    key={mark}
                />)
            ))}
        </>
    )
}
export default HourColumns;



