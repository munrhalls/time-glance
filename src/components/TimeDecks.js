import React, { useState } from 'react';
import { TimeDeck } from './TimeDeck'
import { TimeDecksPanel } from './TimeDecksPanel';

export const TimeDecks = () => {
    const decks = [
        {
            id: 1,
            name: 'Working out.',
            color: 'blue'
        },
        {
            id: 2,
            name: 'Going out.',
            color: 'blue'
        },
        {
            id: 3,
            name: 'Study, training and practice.',
            color: 'blue'
        }
    ]
    const [timeDecks, setTimeDecks] = useState(decks);
    const updateDecks = (decks) => {
        setTimeDecks(decks);
    }

    return (
        <div className='flex'>
            <TimeDecksPanel timeDecks={timeDecks} />
            <div>
                TIMEDECKS.
                {timeDecks.map(timeDeck => {
                    return <TimeDeck timeDeck={timeDeck} key={timeDeck.id} />
                })}
            </div>
        </div>
    )
}
