import React from 'react'
import { Day } from './Day'

export const Schedule = () => {
    const month = [...Array(7).keys()].map(i => i + 1);
    const weeks = [...Array(5).keys()].map(i => i + 1);

    return (
        <div className="Schedule">
            {weeks.map(week => <div className="Week">
                {month.map((day, index) => { return <Day day={day} key={day} /> })}
            </div>)}

        </div>
    )
}
