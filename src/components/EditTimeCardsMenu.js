import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const nums = [];
  [1, 7, 13, 19].forEach((row) => {
    const numsForRow = [];
    for (let i = row; i < row + 6; i++) {
      numsForRow.push(i);
    }
    nums.push(numsForRow);
  });

  return (
    <div className="EditTimeCardsMenu">
      {nums.map((row) => {
        return (
          <div className="NumBtnsRow" key={row + Math.random()}>
            {row.map((num) => {
              return (
                <Button
                  type="num"
                  label={num.toString()}
                  handlerFunc={() => editTimeCards(num)}
                  key={num + Math.random()}
                />
              );
            })}
          </div>
        );
      })}
      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
