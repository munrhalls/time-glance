import React from 'react'

export const Day = ({ day }) => {
    const hourMarks = [...Array(24).keys()];

    return (
        <div className="Day">
            {day}
            <div>
                {hourMarks.map(hourMark => { return <span className="HourMark">{hourMark}</span> })}
            </div>
        </div>
    )
}
