import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const nums = [];
  [0, 4, 8, 12, 16, 20].forEach((row) => {
    const numsForRow = [];
    for (let i = row; i < row + 4; i++) {
      numsForRow.push(i + 1);
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
