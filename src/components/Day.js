import React, { useState } from "react";

export const Day = ({ day }) => {
  const [timeCards, setTimeCards] = useState([]);
  const hourMarks = [4, 8, 12, 16, 20, 24];
  const HourRows = [...Array(24).keys()];
  const calcMargin = (hourMark) => {
    if (hourMark === 24) {
      return 0.25;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    const timeCardJSONStr = e.dataTransfer.getData("text/plain");
    const timeCard = JSON.parse(timeCardJSONStr);
    timeCard.dropHour = e.target.getAttribute("hourRow");
    setTimeCards([...timeCards, timeCard]);
  };

  return (
    <div className="Day" onDragOver={handleDragOver} onDrop={handleOnDrop}>
      <div className="DayTitle">{day}</div>
      <div className="DayHours">
        <div className="HourRows">
          {timeCards.map((timeCard) => {
            return (
              <div
                draggable={true}
                className="DayTimeCard"
                style={{
                  backgroundColor: `${timeCard.color}`,
                  fontSize: `${0.8 + 0.07 * timeCard.duration}rem`,
                  marginTop: `${timeCard.dropHour - 0.05}rem`,
                  height: `${timeCard.duration}rem`,
                  border: "2px solid #000",
                }}
                key={"day-" + day + "-card-" + timeCard.id}
              >
                <span className="DayTimeCardDurationMark">
                  {timeCard.duration}
                </span>
              </div>
            );
          })}
          {HourRows.map((hourRow) => {
            return (
              <div hourrow={hourRow} className="HourRow" key={hourRow}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
