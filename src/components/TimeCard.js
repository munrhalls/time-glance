import React from "react";
// import PropTypes from "prop-types";

const TimeCard = ({ card }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("card", JSON.stringify({card}))
  };

  return (
    <div
      className="border-2 bg-black border-black w-16 h-16"
      draggable
      onDragStart={handleDragStart}
    ></div>
  );
};

// TimeCard.propTypes = {

// }

export default TimeCard;
