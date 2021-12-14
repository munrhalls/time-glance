import React from 'react'

export const TimeDecksPanel = ({ timeDecks }) => {
    return (
        <div className="TimeDecksPanel"
            style={{}}>
            {timeDecks.map(timeDeck =>
                <div className="TimeDecksPanelItem"
                    key={timeDeck.id}
                    style={{ backgroundColor: `${timeDeck.color}` }}>
                    {timeDeck.name}
                </div>)
            }
        </div >
    )
}
