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
    console.log(timeCard.duration);
    const dropHour = e.target.getAttribute("hourRow");
    setTimeCards([...timeCards, timeCard]);
  };

  return (
    <div className="Day" onDragOver={handleDragOver} onDrop={handleOnDrop}>
      <div className="DayTitle">{day}</div>
      <div className="DayHours">
        <div className="HourMarks">
          {hourMarks.map((hourMark, index) => {
            return (
              <div
                className="HourMark"
                key={hourMark}
                style={{ marginTop: `${calcMargin(hourMark)}rem` }}
              >
                {" "}
                {hourMark}
              </div>
            );
          })}
        </div>
        <div className="HourRows">
          {timeCards.map((timeCard) => {
            return (
              <div
                className="DayTimeCard"
                style={{
                  backgroundColor: `${timeCard.color}`,
                  top: `${timeCard.duration}`,
                }}
                key={"day-" + day + "-card-" + timeCard.id}
              >
                timecard
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
