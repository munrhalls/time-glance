import HourColumn from './HourColumn';

const HourColumns = ({handleDragOver, handleDrop, dragHighlight, isHighlighted, mark }) => {
    const hourColumns = [...Array(24).keys()].map((i) => i);

    return (
        <>
        {hourColumns.map((mark) => (
                <HourColumn
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    isHighlighted={dragHighlight.indexOf(mark) > -1}
                    mark={mark}
                    className={`bg-black color-white text-xs flex items-end`}
                    key={mark}
                />
            ))}
        </>
    )
}
export default HourColumns;



