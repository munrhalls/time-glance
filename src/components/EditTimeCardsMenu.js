import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div className="EditTimeCardsMenu">
      <Button type="scrollLeft"></Button>
      <div className="NumBtnsRow">
        {nums.map((num) => {
          return (
            <Button
              type="num"
              label={num}
              handlerFunc={() => editTimeCards(1)}
            />
          );
        })}
      </div>
      <Button type="scrollRight"></Button>

      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
