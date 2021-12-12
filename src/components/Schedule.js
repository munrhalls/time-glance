import React from 'react'

export const Schedule = () => {
    const month = [...Array(31).keys()]

    return (
        <div>
            {month.map(day => { return <div key={day}>{day}</div> })}
        </div>
    )
}
