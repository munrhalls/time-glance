import React from 'react'
import { Day } from './Day'

export const Schedule = () => {
    const month = [...Array(31).keys()]

    return (
        <div>
            {month.map(day => { return <Day day={day} /> })}
        </div>
    )
}
