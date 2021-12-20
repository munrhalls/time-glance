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
    };
    setTimeCards((timeCards) => {
      return [...timeCards, newTimeCard];
    });
  };

  return (
    <div className="TimeDeck" style={{ position: "relative" }}>
      {/* <div className="TimeDeckBg" style={{ backgroundColor: `${timeDeck.color}`, opacity: '0.51', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}></div> */}
      <Button type="add" label="New Card." handlerFunc={addTimeCard} />
      {timeCards.map((timeCard) => {
        return <TimeCard timeCard={timeCard} key={timeCard.id + "1"} />;
      })}
    </div>
  );
};
