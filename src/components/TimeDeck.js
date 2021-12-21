import React, { useState } from "react";
import { TimeCard } from "./TimeCard";
import { Button } from "./Button";
import { TimeCardsMenu } from "./TimeCardsMenu";

export const TimeDeck = ({ timeDeck }) => {
  const [timeCards, setTimeCards] = useState([{}]);

  const markTimeCard = (id) => {
    const updatedCards = timeCards.map((timeCard) => {
      if (timeCard.id === id) {
        timeCard.marked = !timeCard.marked;
      }
      return timeCard;
    });
    setTimeCards(updatedCards);
  };
  return (
    <div className="TimeDeck" style={{ position: "relative" }}>
      {/* <div className="TimeDeckBg" style={{ backgroundColor: `${timeDeck.color}`, opacity: '0.51', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}></div> */}
      <TimeCardsMenu
        timeDeck={timeDeck}
        timeCards={timeCards}
        setTimeCards={setTimeCards}
      />

      {timeCards && timeCards.length
        ? timeCards.map((timeCard) => {
            return (
              <TimeCard
                timeCard={timeCard}
                key={timeCard.id + Math.random()}
                markTimeCard={markTimeCard}
              />
            );
          })
        : ""}
    </div>
  );
};
