import React from "react";

export const TimeCard = ({ timeCard, markTimeCard }) => {
  const handleDragStart = (e) => {
    console.log("DragStart");
    e.dataTransfer.setData("text/plain", e);
  };

  const setBgColor = () => {
    return timeCard.marked ? "green" : timeCard.color;
  };

  return (
    <>
      {timeCard && timeCard.id ? (
        <div
          className="TimeCard"
          style={{ backgroundColor: `${setBgColor()}`, zIndex: "1" }}
          draggable={true}
          // onDragStart={handleDragStart}
          onClick={() => markTimeCard(timeCard.id)}
        >
          {timeCard.duration}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
