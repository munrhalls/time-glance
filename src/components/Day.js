import React from 'react'

export const Day = ({ day }) => {
    const hourMarks = [...Array(24).keys()].map(i => i + 1);

    return (
        <div className="Day">
            {day}
            {/* <div className="HourMarks">
                {hourMarks.map(hourMark => { return <span className="HourMark" key={hourMark}>{hourMark}</span> })}
            </div> */}
        </div>
    )
}
