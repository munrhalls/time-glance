import React from "react";

export const TimeCard = ({ timeCard }) => {
  const handleDragStart = (e) => {
    console.log(timeCard, timeCard.toString());
    e.dataTransfer.setData("text/plain", e);
  };

  return (
    <div
      className="TimeCard"
      style={{ backgroundColor: "orange", zIndex: "1" }}
      draggable={true}
      onDragStart={handleDragStart}
    >
      4
    </div>
  );
};
