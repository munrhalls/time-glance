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
      color: "orange",
    },
    {
      id: 3,
      name: "Study, training and practice. Practice, practice, practice.",
      color: "purple",
    },
  ];

  const [timeDecks, setTimeDecks] = useState(decks);
  const addNewTimeDeck = () => {
    const newTimeDeck = {
      id: timeDecks.length + 1,
      name: "New deck of time cards!",
      color: "Blue",
    };
    setTimeDecks([...timeDecks, newTimeDeck]);
  };
  const delTimeDeck = (id) => {
    setTimeDecks((timeDecks) => {
      return timeDecks.filter((timeDeck) => timeDeck.id !== id);
    });
  };

  return (
    <div className="TimeDecks">
      <Panel
        timeDecks={timeDecks}
        addNewTimeDeck={addNewTimeDeck}
        delTimeDeck={delTimeDeck}
      />

      <div className="TimeDecksItems">
        {timeDecks.map((timeDeck) => {
          return <TimeDeck timeDeck={timeDeck} key={timeDeck.id + "1"} />;
        })}
      </div>
    </div>
  );
};
