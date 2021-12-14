import React from 'react'

export const Day = ({ day }) => {
    const hourMarks = [0, 4, 8, 12, 16, 20, 24];
    const hourColumns = [...Array(24).keys()];

    return (
        <div className="Day">
            <div className="DayTitle">
                {day}
            </div>
            <div className="HourColumns">
                {hourColumns.map(hourColumn => { return <div className="HourColumn" key={hourColumn}>.</div> })}
            </div>
            <div className="HourMarks">
                {hourMarks.map(hourMark => { return <span className="HourMark" key={hourMark}>{hourMark}</span> })}
            </div>
        </div>
    )
}
