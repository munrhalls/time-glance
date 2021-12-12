import React, { useState } from 'react';

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
            <div>Side panel.</div>
            <div>
                {timeDecks.map(timeDeck => {
                    return <div>Time deck. </div>
                })}
            </div>
        </div>
    )
}
