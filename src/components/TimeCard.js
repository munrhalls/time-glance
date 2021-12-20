import React from "react";

export const TimeCard = ({ timeCard, markTimeCard }) => {
  const handleDragStart = (e) => {
    console.log("DragStart");
    e.dataTransfer.setData("text/plain", e);
  };

  const setStyle = () => {
    return {
      backgroundColor: `${timeCard.marked ? "green" : timeCard.color}`,
      border: `${timeCard.marked ? "6px solid green" : "none"}`,
      zIndex: "1",
    };
  };

  return (
    <>
      {timeCard && timeCard.id ? (
        <div
          className="TimeCard"
          style={setStyle()}
          draggable={true}
          onDragStart={handleDragStart}
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
