import React from 'react'

export const TimeDecksPanel = ({ timeDecks }) => {
    return (
        <div className="TimeDecksPanel">
            {timeDecks.map(timeDeck => <div key={timeDeck.id}>Panel item: {timeDeck.name}</div>)}
        </div>
    )
}
