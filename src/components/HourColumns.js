import HourColumn from './HourColumn';

const HourColumns = ({handleDragOver, handleDragLeave, handleDrop, highlightHours, standardHourColWidth }) => {
    const hourColumns = [...Array(24).keys()].map((i) => i);
    const checkIsIndayHours = () => {
        if (highlightHours && highlightHours.indexOf(24) > -1) {
            return false;
        }
        return true;
    }
    
    const isInDayHours = checkIsIndayHours();
    const isAvailable = isInDayHours;

    return (
        <>
        {hourColumns.map((mark) => (
                <HourColumn
                    handleDragOver={handleDragOver}
                    handleDragLeave={handleDragLeave}
                    handleDrop={handleDrop}
                    mark={mark}
                    className={`bg-black color-white text-xs flex items-end`}
                    standardHourColWidth={standardHourColWidth}
                    key={mark}
                />
            ))}
        </>
    )
}
export default HourColumns;



