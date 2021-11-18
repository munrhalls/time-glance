import React from "react";
// import PropTypes from "prop-types";

const TimeCard = ({ timeCard }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("card", JSON.stringify({ timeCard }));
  };
  const hourUnit = 2;
  const width = timeCard.duration * hourUnit;
  const left = "left-" + timeCard.startHour * 2;
  const bgColor = "bg-" + timeCard.bgColor + "-900";

  return (
    <div className={`w-${width} h-${hourUnit * 10} ${left} ${bgColor} h-12 absolute text-black text-2xl bg-black border-black  border-2 rounded-lg flex justify-center content-center`} draggable onDragStart={handleDragStart}>
      <span>{timeCard.numDuration}</span>
    </div>
  );
};

// TimeCard.propTypes = {

// }

export default TimeCard;
