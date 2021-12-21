import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const numRows = [0, 4, 8, 12, 16, 20];
  const nums = [];
  numRows.forEach((row) => {
    const numsForRow = [];
    for (let i = row; i < row + 4; i++) {
      numsForRow.push(i + 1);
    }
    nums.push(numsForRow);
  });
  console.log(nums);
  return (
    <div className="EditTimeCardsMenu">
      {numRows.map((row) => {
        return (
          <div className="RowNumBtns" style={{ color: "#fff" }}>
            Num Row {row}
          </div>
        );
      })}
      {/* {nums.map((num) => (
        <Button
          type="num"
          label={num.toString()}
          handlerFunc={() => editTimeCards(num)}
          key={num + Math.random()}
        />
      ))} */}
      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
