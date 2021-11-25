import React from 'react'
import DayCard from './DayCard'

export const DayCards = ({dayCards}) => {
    return (
        <>
            {dayCards.map((dayCard) => (
                <DayCard
                    key={dayCard.id}
                    dayCard={dayCard}
                />
            ))}
        </>
    )
}

export default DayCards;