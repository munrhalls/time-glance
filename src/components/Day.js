import React from "react";
import { useDrop } from "react-dnd";
import { TimeCard } from "./TimeCard";
import { useState } from "react";

export const Day = () => {
  // syntax for functions
  // this needs to detect ondrop
  // launch callback on ondrop
  // do checks
  // update/not update state accordingly

  const [cards] = useState([
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
  ]);

  const handleDrop = (e) => {
    console.log("DROP!!!");
    console.log(e);
  }
  const onDragOver = (e) => {
    e.preventDefault();
  };
  function handleOnClick() {
    console.log("CLICK");
  }

  return (
    <div
      className="h-14 border-2"
      onClick={handleOnClick}
      onDragOver={onDragOver}
      onDrop={(e) => handleDrop(e)}
    >
      {cards.map((card) => (
        <h3 key={card.id}>{card.num}</h3>
      ))}
    </div>
  );
};
