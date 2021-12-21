import React, { useState } from "react";
import { Button } from "./Button";
import { EditTimeCardsMenu } from "./EditTimeCardsMenu";

export const TimeCardsMenu = ({ timeCards, setTimeCards, timeDeck }) => {
  const [editMode, setEditMode] = useState(false);

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
  const openEditMenu = () => {
    setEditMode((editMode) => !editMode);
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

  return (
    <div className="TimeCardsMenu">
      {editMode ? (
        <EditTimeCardsMenu />
      ) : (
        <>
          <Button
            type="addSquare"
            label="New Card."
            handlerFunc={addTimeCard}
          />
          <Button type="delSquare" label="Delete" handlerFunc={delTimeCards} />
          <Button type="editSquare" label="Edit." handlerFunc={openEditMenu} />
        </>
      )}
    </div>
  );
};
