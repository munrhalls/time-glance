import React from "react";
// import PropTypes from "prop-types";

const TimeCard = ({ card }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("card", JSON.stringify({card}))
  };
  const width = 'w-' + card.duration;
  const tailwindCSS = `border-2 bg-black text-white border-black ${width} h-16`
  return (
    <div
      className={tailwindCSS}
      draggable
      onDragStart={handleDragStart}
    >
    {card.duration}</div>
  );
};

// TimeCard.propTypes = {

// }

export default TimeCard;
