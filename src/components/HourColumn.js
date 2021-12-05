import React, { useState } from "react";
import HighlightBox from './HighlightBox';

const HourColumn = ({ getCard, handleDrop, isHighlighted, isAvailable, mark, standardHourColWidth }) => {
    const [highlightParams, setHighlightParams] = useState({ display: 'none', width: 0, left: 0, bgColor: 'purple', });
    let dragOverAvailable = true;

    const defaultStyle = { width: `${standardHourColWidth}rem`, backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    const runFunc = () => {
        console.log('Function runs.')
    }
    const throttleDragOver = (e) => {
        e.preventDefault();
        if (dragOverAvailable) {
            dragOverAvailable = false;
            runFunc();
            setTimeout(() => {
                dragOverAvailable = true;
            }, 1500)
        }
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        console.log('dragover')
        const card = getCard(e);
        const bgColor = card.bgColor;
        const hourColumn = e.target;
        const hourNum = hourColumn.innerText;
        const width = standardHourColWidth * card.duration;
        const distanceLeft = standardHourColWidth * hourNum;
        setHighlightParams({ display: 'block', bgColor: bgColor, width: width, left: distanceLeft })
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        console.log('dragleave')
        setHighlightParams({ display: 'none', bgColor: 'transparent', width: 0, left: 0 })
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={throttleDragOver}
            // onDragLeave={handleDragLeave}
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