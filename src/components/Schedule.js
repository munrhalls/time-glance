import React from 'react'
import { Day } from './Day'

export const Schedule = () => {
    const month = [...Array(31).keys()].map(i => i + 1);
    
    return (
        <div className="Month">
            {month.map(day => { return <Day day={day} key={day} /> })}
        </div>
    )
}
