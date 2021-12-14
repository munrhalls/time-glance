import React from 'react'

export const TimeDecksPanel = ({ timeDecks, addNewTimeDeck }) => {

    return (
        <div className="TimeDecksPanel"
            style={{}}>
            <span>Time Decks:</span>
            <button
                className='BtnAddTimeDeck'
                onClick={addNewTimeDeck}>
                <span>Add new time deck.</span>
            </button>
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
