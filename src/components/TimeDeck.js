import React from 'react'

export const TimeDeck = ({timeDeck}) => {
    return (
        <div style={{background: `${timeDeck.color}`}}>
           {timeDeck.name}
        </div>
    )
}
