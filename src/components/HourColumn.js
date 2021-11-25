const HourColumn = ({ handleDragOver, handleDrop, isHighlighted, mark }) => {
    const defaultStyle = { width: '0.5rem', backgroundColor: 'black', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }
    const highlightStyle = { width: '0.5rem', backgroundColor: 'green', borderRight: '1px solid #111111', color: 'white', fontSize: '5px' }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            value={mark}
            key={mark}
            className={`color-white text-xs flex items-end`}
            style={isHighlighted ? highlightStyle : defaultStyle}>
            {mark}
        </div>
    )
}

export default HourColumn;