const HourColumn = ({ handleDragOver, handleDragLeave, handleDrop, isHighlighted, isAvailable, mark, standardHourColWidth }) => {
    const defaultStyle = { width: `${standardHourColWidth}rem`, backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }

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
        </div>
    )
}

export default HourColumn;