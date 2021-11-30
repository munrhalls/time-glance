const HourColumn = ({ handleDragOver, handleDragLeave, handleDrop, isHighlighted, isAvailable, mark, standardHourColWidth }) => {
    const defaultStyle = { width: `${standardHourColWidth}rem`, backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    const highlightColor = isAvailable ? 'green' : 'red';
    const highlightStyle = { backgroundColor: highlightColor, width: `${standardHourColWidth}rem`, borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    console.log(standardHourColWidth)
    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            key={mark}
            className={`color-white text-xs flex items-end`}
            style={isHighlighted ? highlightStyle : defaultStyle}
        >
            {mark}
        </div>
    )
}

export default HourColumn;