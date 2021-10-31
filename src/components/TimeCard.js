import React from "react";
// import PropTypes from "prop-types";

const TimeCard = ({ timeCard }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("card", JSON.stringify({timeCard}))
  };
  const hourUnit = 2;
  const width = 'w-' + (timeCard.duration * hourUnit);
  const left = 'left-' + timeCard.startHour * 2;
  const bgColor = 'bg-' + timeCard.bgColor + '-900';
  const tailwindCSS = `${width} h-${hourUnit * 10} ${left} ${bgColor} h-full absolute text-white bg-black`

  return (
    <div
      className={tailwindCSS}
      draggable
      onDragStart={handleDragStart}
    >
    {timeCard.duration}</div>
  );
};

// TimeCard.propTypes = {

// }

export default TimeCard;
