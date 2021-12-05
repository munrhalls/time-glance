import React, { useState, useEffect } from "react";
import HighlightBox from './HighlightBox';
let dragOverCount = 0;

const HourColumn = ({ isHighlighted, handleDragOver, handleDragLeave, handleDrop, mark, standardHourColWidth }) => {
    const base = { width: `${standardHourColWidth}rem`, backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    const highlighted = {width: `${standardHourColWidth}rem`, backgroundColor: 'green', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    const style = isHighlighted ? highlighted : base;

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            key={mark}
            className={`color-white text-xs flex items-end`}
            style={style}
        >
            {mark}
        </div>
    )
}

export default HourColumn;