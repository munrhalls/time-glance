import React, { useState } from "react";
import { TimeCard } from "./TimeCard";
import { Button } from "./Button";

export const TimeDeck = ({ timeDeck }) => {
  const [timeCards, setTimeCards] = useState([{}]);
  const addTimeCard = () => {
    const newTimeCard = {
      id: timeDeck.name + "/" + timeCards.length + 1,
      color: "blue",
      duration: 24,
      marked: false,
    };
    setTimeCards((timeCards) => {
      return [...timeCards, newTimeCard];
    });
  };
  const delTimeCards = () => {
    setTimeCards((timeCards) => {
      return timeCards.filter((timeCard) => timeCard.marked !== true);
    });
  };
  const editTimeCards = () => {
    setTimeCards((timeCards) => {
      return timeCards.map((timeCard) => {
        if (timeCard.marked) {
          timeCard.color = "white";
        }
        timeCard.marked = false;
        return timeCard;
      });
    });
  };
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
      <Button type="addSquare" label="New Card." handlerFunc={addTimeCard} />
      <Button type="delSquare" label="Delete" handlerFunc={delTimeCards} />
      <Button type="editSquare" label="Edit." handlerFunc={editTimeCards} />
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
