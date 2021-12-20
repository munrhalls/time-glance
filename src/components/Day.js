import React from "react";

export const Day = ({ day }) => {
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
    console.log(timeCard);
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
          {HourRows.map((HourRow) => {
            return <div className="HourRow" key={HourRow}></div>;
          })}
        </div>
      </div>
    </div>
  );
};
