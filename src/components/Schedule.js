import React from 'react'
import { Day } from './Day'

export const Schedule = () => {
    const month = [...Array(31).keys()]

    return (
        <div className="Month">
            {month.map(day => { return <Day day={day} /> })}
        </div>
    )
}
