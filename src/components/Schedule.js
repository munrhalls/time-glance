import React from "react";
import { Day } from "./Day";

export const Schedule = () => {
  const month = [...Array(7).keys()].map((i) => i + 1);
  const weeks = [...Array(5).keys()].map((i) => i + 1);
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const monthNum = dateNow.getMonth();
  const firstOfMonth = new Date(year, monthNum - 1, 1);
  const lastOfMonth = new Date(year, monthNum, 0);

  console.log(firstOfMonth);
  console.log(lastOfMonth);

  // get month num
  //

  return (
    <div className="Schedule">
      <div className="TitleStripDays">
        <div className="TitleStripDaysSquare"></div>
        <div className="TitleStripDaysTitle">days</div>
      </div>
      <div className="Month">
        <div className="TitleStripHours">
          <div className="TitleStripHoursTitle">hours</div>
        </div>
        <div className="Weeks">
          {weeks.map((week, i) => (
            <div className="Week" key={week}>
              Week {i}
              {month.map((day, index) => {
                return <Day day={day} key={day} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
