import React from 'react'
import { Button } from './Button'

export const TimeDecksPanel = ({ timeDecks, addNewTimeDeck }) => {

    return (
        <div className="TimeDecksPanel"
            style={{}}>
            <span>Time Decks:</span>
            <Button
            sign="+"
            text="Add new."
            handlerFunc={addNewTimeDeck} />
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
