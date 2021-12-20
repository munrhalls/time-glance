import React, { useState } from "react";
import { TimeCard } from "./TimeCard";
import { Button } from "./Button";

export const TimeDeck = ({ timeDeck }) => {
  const [timeCards, setTimeCards] = useState([{}]);
  const addTimeCard = () => {
    console.log("Add time card.");
    const newTimeCard = {
      id: timeCards.length + 1,
      color: "blue",
      duration: 1,
      marked: false,
    };
    setTimeCards((timeCards) => {
      return [...timeCards, newTimeCard];
    });
  };
  const delTimeCards = () => {
    console.log("Delete time cards.");
  };
  const editTimeCards = () => {
    console.log("Edit time cards.");
  };
  const markTimeCard = (id) => {
    console.log(id);
    const card = timeCards.find((timeCard) => timeCard.id === id);
  };
  return (
    <div className="TimeDeck" style={{ position: "relative" }}>
      {/* <div className="TimeDeckBg" style={{ backgroundColor: `${timeDeck.color}`, opacity: '0.51', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}></div> */}
      <Button type="addSquare" label="New Card." handlerFunc={addTimeCard} />
      <Button type="delSquare" label="Delete" handlerFunc={delTimeCards} />
      <Button type="editSquare" label="Edit." handlerFunc={editTimeCards} />

      {timeCards.map((timeCard) => {
        return (
          <TimeCard
            timeCard={timeCard}
            key={timeCard.id + "1"}
            markTimeCard={markTimeCard}
          />
        );
      })}
    </div>
  );
};
