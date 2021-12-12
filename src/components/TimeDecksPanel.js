import React from 'react'

export const TimeDecksPanel = ({ timeDecks }) => {
    return (
        <div>
            {timeDecks.map(timeDeck => <div key={timeDeck.id}>{timeDeck.name}</div>)}
        </div>
    )
}
