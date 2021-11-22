import React, { useState } from "react";

const HourColumn = ({ handleDrop, mark }) => {
    const [background, setBackground] = useState('blue');

        
    const handleDragOver = (e) => {
        e.preventDefault();
        const target = e.target;
        setBackground('green')
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            key={mark}
            className={`color-white text-xs flex items-end`}
            style={{ backgroundColor: background, width: '0.5rem', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }}>
            {mark}
        </div>
    )
}

export default HourColumn;