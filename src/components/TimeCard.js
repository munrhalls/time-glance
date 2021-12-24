import React from "react";

export const TimeCard = ({ timeCard, markTimeCard, style }) => {
  const handleDragStart = (e) => {
    console.log(timeCard);
    e.dataTransfer.setData("text", JSON.stringify(timeCard));
  };

  const setStyle = () => {
    return {
      backgroundColor: `${timeCard.marked ? "green" : timeCard.color}`,
      border: `${timeCard.marked ? "6px solid green" : "none"}`,
      fontSize: `${0.51 + 0.07 * timeCard.duration}rem`,
      height: `${1.5 + 0.08 * timeCard.duration}rem`,
      width: `${1 + 0.08 * timeCard.duration}rem`,
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
          <span className="TimeCardDurationMark">{timeCard.duration}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
