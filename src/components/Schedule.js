import React from 'react'
import { Day } from './Day'

export const Schedule = () => {
    const month = [...Array(7).keys()].map(i => i + 1);
    const weeks = [...Array(5).keys()].map(i => i + 1);

    return (
        <div className="Schedule">
            <div className="TitleStripDays">
                <div className='TitleStripDaysSquare'></div>
                <div className='TitleStripDaysTitle'>days</div>
            </div>
            <div className="Month">
                <div className="TitleStripHours">
                    <div className="TitleStripHoursTitle">hours</div>
                </div>
                <div className="Weeks">
                    {weeks.map(week => <div className="Week" key={week}>
                        {month.map((day, index) => { return <Day day={day} key={day} /> })}
                    </div>)}
                </div>
            </div>
        </div>
    )
}
