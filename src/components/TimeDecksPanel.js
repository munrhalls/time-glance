import React from 'react'

export const TimeDecksPanel = ({ timeDecks, addNewTimeDeck }) => {
    
    return (
        <div className="TimeDecksPanel"
            style={{}}>
            <span>Time Decks:</span>
            <button onClick={addNewTimeDeck}>Add new time deck.</button>
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
