import React, { useState } from "react";
import { Button } from "./Button";
import { EditTimeCardsMenu } from "./EditTimeCardsMenu";
import cursor from "./../resources/cursor.svg";

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
    setEditMode(() => true);
  };
  const closeEditMenu = () => {
    setEditMode(() => false);
  };
  const editTimeCards = (num) => {
    console.log(num);
    const duration = Number(num);
    setTimeCards((timeCards) => {
      return timeCards.map((timeCard) => {
        if (timeCard.marked) {
          timeCard.duration = duration;
        }
        return timeCard;
      });
    });
  };

  return (
    <div className="TimeCardsMenu">
      {editMode ? (
        <EditTimeCardsMenu
          editTimeCards={editTimeCards}
          closeEditMenu={closeEditMenu}
        />
      ) : (
        <>
          <Button
            type="addSquare"
            label="New Card."
            handlerFunc={addTimeCard}
          />
          <Button type="delSquare" label="Delete" handlerFunc={delTimeCards} />
          <Button type="editSquare" label="Edit." handlerFunc={openEditMenu} />
          <div className="MarkerNote">
            <span className="Note">Click a card to mark it.</span>
            <img src={cursor} className="Symbol" />
          </div>
        </>
      )}
    </div>
  );
};
