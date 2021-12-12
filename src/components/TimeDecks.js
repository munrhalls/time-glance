import React, { useState } from 'react';
import { TimeDeck } from './TimeDeck'
import { TimeDecksPanel } from './TimeDecksPanel';

export const TimeDecks = () => {
    const decks = [
        {
            id: 1,
            name: 'Working out.'
        },
        {
            id: 2,
            name: 'Going out.'
        },
        {
            id: 3,
            name: 'Study, training and practice.'
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
                {timeDecks.map(timeDeck => {
                    return <TimeDeck timeDeck={timeDeck} />
                })}
            </div>
        </div>
    )
}
