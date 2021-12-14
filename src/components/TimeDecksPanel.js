import React from 'react'
import { Button } from './Button'

export const TimeDecksPanel = ({ timeDecks, addNewTimeDeck }) => {

    return (
        <div className="TimeDecksPanel"
            style={{}}>
            <div className="TimeDecksPanelTitle">TIME DECKS PANEL.</div>
            <Button
                type='add'
                handlerFunc={addNewTimeDeck} />
            {timeDecks.map(timeDeck => {
                return <div className="TimeDecksPanelItem">
                    <div className="TimeDecksPanelSymbolDeck"
                        key={timeDeck.id}
                        style={{ backgroundColor: `${timeDeck.color}` }}>{timeDeck.name}</div>
                    <div className='TimeDecksPanelSymbolDeckMenu'>
                        <Button
                            type='delete'
                            handlerFunc={addNewTimeDeck} />
                        <Button
                            type='edit'
                            handlerFunc={addNewTimeDeck} />
                    </div>
                </div>
            }
            )
            }
        </div >
    )
}
