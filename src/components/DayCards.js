import React from 'react'
import DayCard from './DayCard'

export const DayCards = ({dayCards}) => {
    return (
        <div>
            {dayCards.map((dayCard) => (
                <DayCard
                    key={dayCard.id}
                    dayCard={dayCard}
                />
            ))}
        </div>
    )
}

export default DayCards;