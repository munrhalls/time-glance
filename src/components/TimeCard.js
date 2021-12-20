import React from "react";

export const TimeCard = ({ timeCard, markTimeCard }) => {
  const handleDragStart = (e) => {
    console.log("DragStart");
    e.dataTransfer.setData("text/plain", e);
  };

  const handleOnClick = () => {
    console.log(timeCard);
    markTimeCard(timeCard.id);
  };

  return (
    <>
      {timeCard && timeCard.id ? (
        <div
          className="TimeCard"
          style={{ backgroundColor: "orange", zIndex: "1" }}
          draggable={true}
          // onDragStart={handleDragStart}
          onClick={handleOnClick}
        >
          {timeCard.duration}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
