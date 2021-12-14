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
            color: 'black'
        },
        {
            id: 3,
            name: 'Study, training and practice.',
            color: 'purple'
        }
    ]
    const [timeDecks, setTimeDecks] = useState(decks);
    const updateDecks = (decks) => {
        setTimeDecks(decks);
    }

    const addNewTimeDeck = (e) => {
        const newTimeDeck = {
            id: timeDecks.length + 1,
            name: "New deck of time cards!",
            color: "Blue"
        }
        setTimeDecks(timeDec)
    }
}
return (
    <div className='TimeDecks'>
        <TimeDecksPanel timeDecks={timeDecks} addNewTimeDeck={addNewTimeDeck} />
        <div className="TimeDecksItems">
            TIMEDECKS.
            {timeDecks.map(timeDeck => {
                return <TimeDeck timeDeck={timeDeck} key={timeDeck.id} />
            })}
        </div>
    </div>
)
}
