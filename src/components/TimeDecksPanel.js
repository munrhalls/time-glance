import React from 'react'

export const TimeDecksPanel = ({ timeDecks }) => {
    return (
        <div>
            {timeDecks.map(timeDeck => <div>{timeDeck.name}</div>)}
        </div>
    )
}
