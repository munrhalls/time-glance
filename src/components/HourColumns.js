import HourColumn from './HourColumn';

const HourColumns = ({handleDragOver, handleDrop, dragHighlight, isHighlighted, mark }) => {
    const hourColumns = [...Array(24).keys()].map((i) => i);
    const checkIsAvailable = () => {
        if (dragHighlight.indexOf(24) > -1) {
            return false;
        }
        return true;
    }

    const isAvailable = checkIsAvailable()

    return (
        <>
        {hourColumns.map((mark) => (
                <HourColumn
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    isHighlighted={dragHighlight.indexOf(mark) > -1}
                    isAvailable={isAvailable}
                    mark={mark}
                    className={`bg-black color-white text-xs flex items-end`}
                    key={mark}
                />
            ))}
        </>
    )
}
export default HourColumns;



