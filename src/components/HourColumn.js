import React from 'react'

const HourColumn = ({ handleDrop, mark }) => {
    return (
        <div
            onDrop={handleDrop}
            key={mark}
            className={`bg-black color-white text-xs flex items-end`}
            style={{ width: '0.5rem', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }}>
            {mark}
        </div>
    )
}

export default HourColumn;