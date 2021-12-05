import React, { useState, useEffect } from "react";
import HighlightBox from './HighlightBox';
let dragOverCount = 0;

const HourColumn = ({ getCard, handleDrop, isHighlighted, isAvailable, mark, standardHourColWidth }) => {
    const [highlightParams, setHighlightParams] = useState({ display: 'none', width: 0, left: 0, bgColor: 'purple', });
    const defaultStyle = { width: `${standardHourColWidth}rem`, backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }

    const handleDragOver = (e) => {
        e.preventDefault();
        if (dragOverCount === 0) {
            console.log('dragover event runs', dragOverCount)
            const card = getCard(e);
            const bgColor = card.bgColor;
            const hourColumn = e.target;
            const hourNum = hourColumn.innerText;
            const width = standardHourColWidth * card.duration;
            const distanceLeft = standardHourColWidth * hourNum;
            setHighlightParams({ display: 'block', width: width, left: distanceLeft, bgColor: bgColor });
            dragOverCount++;
        }
        console.log(dragOverCount)

    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        dragOverCount = 0;
        setHighlightParams({ display: 'none', width: 0, left: 0, bgColor: 'purple', });
    }
    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            key={mark}
            className={`color-white text-xs flex items-end`}
            style={defaultStyle}
        >
            {mark}
            <HighlightBox highlightParams={highlightParams} />
        </div>
    )
}

export default HourColumn;