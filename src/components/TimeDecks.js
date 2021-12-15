import React, { useState } from "react";
import { TimeDeck } from "./TimeDeck";
import { Panel } from "./Panel";

export const TimeDecks = () => {
  const decks = [
    {
      id: 1,
      name: "Working out.",
      color: "blue",
    },
    {
      id: 2,
      name: "Going out.",
      color: "black",
    },
    {
      id: 3,
      name: "Study, training and practice.",
      color: "purple",
    },
  ];
  const [timeDecks, setTimeDecks] = useState(decks);

  const addNewTimeDeck = (e) => {
    const newTimeDeck = {
      id: timeDecks.length + 1,
      name: "New deck of time cards!",
      color: "Blue",
    };
    setTimeDecks([...timeDecks, newTimeDeck]);
  };
  return (
    <div className="TimeDecks">
      <Panel timeDecks={timeDecks} addNewTimeDeck={addNewTimeDeck} />

      <div className="TimeDecksItems">
        {timeDecks.map((timeDeck) => {
          return <TimeDeck timeDeck={timeDeck} key={timeDeck.id} />;
        })}
      </div>
    </div>
  );
};
